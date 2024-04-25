import getWeatherData from '../service/weatherService';
import { showUnits } from './unitsHandler';

const city = document.getElementById('city');
const DEFAULT_CITY = 'bogota';

function toogleDarkModeIfNecessary(isDay) {
  console.log(`weatherCard.js isDay: ${isDay}`);
  const cardBody = document.getElementsByClassName('card-body')[0];
  if (!isDay) {
    cardBody.classList.add('dark-mode');
  } else {
    cardBody.classList.add('light-mode');
  }
}

async function showDataInWeatherCard(useDefaultCity) {
  let cityName = '';
  if (useDefaultCity === true) {
    cityName = DEFAULT_CITY;
  } else {
    cityName = city.value;
  }
  const response = await getWeatherData(cityName);
  const cityCountryFields = document.querySelectorAll('.info-card h2');

  if (response.code === 200) {
    cityCountryFields[0].textContent = `${response.city}, `;
    cityCountryFields[1].textContent = response.country;

    showUnits(response.temp_c, response.feelsLike_c);
    toogleDarkModeIfNecessary(response.is_day);
  } else {
    cityCountryFields[0].textContent = 'Sorry, there was a problem retrieving the weather data';
  }
}

export default
showDataInWeatherCard;
