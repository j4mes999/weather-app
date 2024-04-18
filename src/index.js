/* eslint-disable no-use-before-define */
import getWeatherData from './service/weatherService';
import './front/css/style.css';

const form = document.querySelector('form');
const city = document.getElementById('city');

form.addEventListener('submit', (event) => {
  //   getWeatherData(city.value).then((response) => {
  //     console.log('index.js response: ');
  //     console.log(response);
  //   });
  getResponseFromAPI();
  event.preventDefault();
});

async function getResponseFromAPI() {
  const response = await getWeatherData(city.value);
  console.log('index.js outside of the then: ');
  console.log(response);
}

//TODO Get data from the backend and show it in the UI
//TODO ADD Error handling in API request
