import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_KEY } from '../../utils/constants';
import Tooltip from 'react-tooltip';
import styles from './styles.module.scss';

class Map extends Component {
  static defaultProps = {
    zoom: 0,
  }

  state = {
    favorites: null,
    center: null,
  }

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    this.setState({
      favorites: favorites,
      center: favorites && favorites[favorites.length - 1].location,
    });
  }

  render() {
    const { favorites } = this.state;

    if (!favorites) {
      return (
        <h3 style={{
          textAlign: 'center',
          fontWeight: 'normal',
        }}>
          Ще немає улюблених міст
        </h3>
      );
    }

    return (
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.props.zoom}
        >
          {
            favorites && favorites.map(city => (
              <div
                data-tip={city.name}
                className={styles.favorite}
                lat={city.location.lat}
                lng={city.location.lng}
              >
                <i className={'material-icons ' + styles.icon}>favorite</i>
                <Tooltip />
              </div>
            ))
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
