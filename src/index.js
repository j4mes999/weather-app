import './front/css/style.css';
import showDataInWeatherCard from './front/weatherCard';

const form = document.querySelector('form');
const inputFiled = document.getElementById('city');

form.addEventListener('submit', (event) => {
  showDataInWeatherCard();
  event.preventDefault();
});

inputFiled.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    showDataInWeatherCard();
  }
});

// TODO ADD Error handling in API request
// TODO add validation in UI using Constraint API
// TODO add the toogle for C -> F
// TODO change background and styling when is day or nigth
// TODO when first loading the page show default value from Bogota for example
