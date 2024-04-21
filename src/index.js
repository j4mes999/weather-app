import './front/css/style.css';
import showDataInWeatherCard from './front/weatherCard';

const form = document.querySelector('form');
const inputFiled = document.getElementById('city');
const errorMessage = document.querySelector('#city + span.error');

inputFiled.addEventListener('input', (event) => {
  if (inputFiled.validity.valid) {
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'City name has to be only characteres from a to z';
    event.preventDefault();
  }
});

form.addEventListener('submit', (event) => {
  showDataInWeatherCard();
  event.preventDefault();
});

inputFiled.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    showDataInWeatherCard();
  }
});

// TODO add action listener to toogle to F
// TODO when first loading the page show default value from Bogota for example
// TODO change background and styling when is day or nigth
