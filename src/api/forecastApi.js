import consts from '../utils/constants';

export const getForecast = ({ lat, lng }) => (
  fetch(`${consts.FORECAST_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Error!');
      }
    })
);
