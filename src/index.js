import './front/css/style.css';
import showDataInWeatherCard from './front/weatherCard';
import { drawCelsiusResult, drawFarenheitResult } from './front/unitsHandler';

showDataInWeatherCard(true);

const form = document.querySelector('form');
const inputField = document.getElementById('city');
const errorMessage = document.querySelector('#city + span.error');
const farenheitToogle = document.getElementById('checkbox-f');

function showErrorMessage(event) {
  errorMessage.textContent = 'City name has to be only characteres from a to z';
  event.preventDefault();
}

function resetValues() {
  farenheitToogle.checked = false;
  const unitLabel = document.getElementsByClassName('deg-unit');
  unitLabel[0].textContent = 'C';
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
    resetValues();
    event.preventDefault();
  } else {
    showErrorMessage(event);
  }
});

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (inputField.validity.valid) {
      showDataInWeatherCard();
      resetValues();
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

// TODO change background and styling when is day or nigth
