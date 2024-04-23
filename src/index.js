import './front/css/style.css';
import { drawCelsiusResult, drawFarenheitResult } from './front/unitsHandler';
import showDataInWeatherCard from './front/weatherCard';

const form = document.querySelector('form');
const inputField = document.getElementById('city');
const errorMessage = document.querySelector('#city + span.error');
const farenheitToogle = document.getElementById('checkbox-f');

showDataInWeatherCard(true);

function showErrorMessage(event) {
  errorMessage.textContent = 'City name has to be only characteres from a to z';
  event.preventDefault();
}

inputField.addEventListener('input', (event) => {
  if (inputField.validity.valid) {
    errorMessage.textContent = '';
  } else {
    showErrorMessage(event);
  }
});

form.addEventListener('submit', (event) => {
  if (inputField.validity.valid) {
    showDataInWeatherCard();
    event.preventDefault();
  } else {
    showErrorMessage(event);
  }
});

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (inputField.validity.valid) {
      showDataInWeatherCard();
    } else {
      showErrorMessage(event);
    }
  }
});

farenheitToogle.addEventListener('change', () => {
  if (farenheitToogle.checked === true) {
    drawFarenheitResult();
  } else {
    drawCelsiusResult();
  }
});

// TODO decrease the size of the circle in toogle check .slider:before
// TODO change background and styling when is day or nigth
// TODO organize code in index.js should be only a few lines of code.
