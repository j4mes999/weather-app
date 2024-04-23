import getWeatherData from '../service/weatherService';
import { changeUnits } from './unitsHandler';

const city = document.getElementById('city');

async function showDataInWeatherCard(useDefaultCity) {
  let cityName = '';
  if (useDefaultCity === true) {
    cityName = 'bogota';
  } else {
    cityName = city.value;
  }
  const response = await getWeatherData(cityName);
  const cityCountryFields = document.querySelectorAll('.info-card h2');

  if (response.code === 200) {
    cityCountryFields[0].innerHTML = `${response.city}, `;
    cityCountryFields[1].innerHTML = response.country;

    changeUnits(response.temp_c, response.feelsLike_c);
    // const temperature = document.querySelector('.temp-number');
    // temperature.innerHTML = response.temp_c;
    // const feelsLike = document.querySelector('.feels-like > .number');
    // feelsLike.innerHTML = response.feelsLike_c;
  } else {
    cityCountryFields[0].innerHTML = 'Sorry, there was a problem retrieving the weather data';
    // cityCountryFields[0].sty
  }
}

export default
showDataInWeatherCard;
