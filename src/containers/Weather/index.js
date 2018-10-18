import React, { Component } from 'react';
import cn from 'classnames';
import Loader from '../../components/Loader';
import Search from '../SearchPlaces';
import Forecast from '../../components/Forecast';
import { getForecast } from '../../api/forecastApi';
import consts from '../../utils/constants';
import { getDayNominative } from '../../utils/date';
import styles from './styles.module.scss';

class Weather extends Component {
  state = {
    cityName: '',
    cityId: null,
    forecast: [],
    isWeatherLoading: false,
    isFavorite: null,
  }

  handlePlaceChange(place) {
    const { 
      name,
      id,
      geometry: {
        location,
      },
    } = place;

    const favorites = JSON.parse(localStorage.getItem('favorites'));

    this.setState({
      cityName: name,
      cityId: id,
      cityLocation: {
        lat: location.lat(),
        lng: location.lng(),
      },
      isFavorite: favorites && !!favorites.find(city => city.id === id),
    });

    this.findWeather(location);
  }

  findWeather({ lat, lng }) {
    this.setState({
      isWeatherLoading: true,
    });

    getForecast({
      lat: lat(),
      lng: lng(),
    })
      .then(response => {
        this.setState({
          forecast: this.normalizeForecastData(response.data),
          isWeatherLoading: false,
        })
      })
  }

  normalizeForecastData(data) {
    return data.map(w => ({
      day: getDayNominative(w.datetime),
      date: w.datetime,
      desc: w.weather.description,
      temp: (+w.temp).toFixed(2),
      icon: `${consts.ICON_URL}${w.weather.icon.substr(1)}.png`,
      minTemp: (+w.min_temp).toFixed(2),
      maxTemp: (+w.max_temp).toFixed(2),
      windSpeed: (+w.wind_spd).toFixed(2),
      windDir: w.wind_dir,
    }));
  }

  handleFavoriteClick() {
    const { cityId, cityLocation, cityName } = this.state;
    let favorites = JSON.parse(localStorage.getItem('favorites'));

    if (!favorites) {
      favorites = [{
        id: cityId,
        location: cityLocation,
        name: cityName,
      }];
    } else {
      const foundCity = favorites.find(city => city.id === cityId);
      if (foundCity) {
        const index = favorites.indexOf(foundCity);
        favorites.splice(index, 1);
      } else {
        favorites.push({
          id: cityId,
          location: cityLocation,
          name: cityName,
        });
      }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.setState({
      isFavorite: favorites && !!favorites.find(city => city.id === cityId),
    });
  }

  render() {
    const { cityName, isFavorite, isWeatherLoading, forecast } = this.state;

    const favIcon = isFavorite ? 'favorite' : 'favorite_bordered';

    const city = !cityName ? null : (
      <div className={styles.cityContainer}>
        <h1 className={styles.cityName}>
          {cityName}
        </h1>
        <i className={cn(styles.cityFavoriteIcon, 'material-icons', {
          [styles.cityFavoriteIconActive] : isFavorite,
        })}
          onClick={() => this.handleFavoriteClick()}>
          {favIcon}
        </i>
      </div>
    );

    const weather = isWeatherLoading ? <Loader /> : (
      <Forecast forecast={forecast} />
    );

    return (
      <>
        <div className={styles.searchContainer}>
          <Search onPlaceChange={(place) => this.handlePlaceChange(place)}/>
        </div>
        {city}
        {weather}
      </>
    );
  }
}

export default Weather;
