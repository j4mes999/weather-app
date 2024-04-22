import './front/css/style.css';
import { drawCelsiusResult, drawFarenheitResult } from './front/unitsHandler';
import showDataInWeatherCard from './front/weatherCard';

const form = document.querySelector('form');
const inputFiled = document.getElementById('city');
const errorMessage = document.querySelector('#city + span.error');
const farenheitToogle = document.getElementById('checkbox-f');

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

farenheitToogle.addEventListener('change', () => {
  if (farenheitToogle.checked === true) {
    drawFarenheitResult();
  } else {
    drawCelsiusResult();
  }
});

// TODO fix the decimal positions when transforming temp
// TODO pressing enter key does not validate input data same when click on send
// TODO when first loading the page show default value from Bogota for example
// TODO change background and styling when is day or nigth
// TODO organize code in index.js should be only a few lines of code.
// TODO when the name of the city and country are too long so the UI breaks
