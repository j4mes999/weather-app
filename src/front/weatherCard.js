import getWeatherData from '../service/weatherService';

const city = document.getElementById('city');

async function showDataInWeatherCard() {
  const response = await getWeatherData(city.value);

  const cityCountryFields = document.querySelectorAll('.info-card h2');
  cityCountryFields[0].innerHTML = `${response.city}, `;
  cityCountryFields[1].innerHTML = response.country;

  const temperature = document.querySelector('.temp-number');
  temperature.innerHTML = response.temp_c;
  const feelsLike = document.querySelector('.feels-like > .number');
  feelsLike.innerHTML = response.feelsLike_c;
}

export default showDataInWeatherCard;
