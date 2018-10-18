// AIzaSyCBc16I1ny1TnuklCdh6yjXg_xTgIh6sQY
export const GOOGLE_KEY = 'AIzaSyCWt-oX6XfeWXSXMS2dCj5_tmbmOf6-D9A'; 
const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/js';

// 3182fa324b4340ef9cb632451ebb05c1
const WEATHER_API_KEY = 'e83a8a7ac30d465b93bd8e2bb270bbf7';
const WEATHER_API_URL = 'https://api.weatherbit.io/v2.0';

export default {
  PLACES_API_URL: `${GOOGLE_API_URL}?key=${GOOGLE_KEY}&libraries=places`,
  FORECAST_API_URL: `${WEATHER_API_URL}/forecast/daily?key=${WEATHER_API_KEY}&units=metric&days=16&lang=uk`,
  ICON_URL: 'http://openweathermap.org/img/w/',
};
