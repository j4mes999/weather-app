import getWeatherData from '../service/weatherService';
import { showUnits } from './unitsHandler';

const DEFAULT_CITY = 'bogota';
const LIGHT_MODE_CLASS = 'light-mode';
const DARK_MODE_CLASS = 'dark-mode';
const DAY_BACKGROUND_CLASS = 'day-background';
const NIGHT_BACKGROUND_CLASS = 'night-background';

const city = document.getElementById('city');

function toggleClasses(elements, classList) {
  classList.forEach((item) => {
    const { element, add, remove } = item;
    elements[element].classList.remove(remove);
    elements[element].classList.add(add);
  });
}

function switchDarkModeIfNecessary(isDay) {
  const elements = {
    cardBody: document.querySelector('.card-body'),
    mainContainer: document.querySelector('.mainContainer'),
    cardHeader: document.querySelector('.card-header'),
    degreeLabel: document.querySelector('.toogle-wrap'),
  };

  if (!isDay) {
    toggleClasses(elements, [
      { element: 'cardBody', add: DARK_MODE_CLASS, remove: LIGHT_MODE_CLASS },
      { element: 'mainContainer', add: NIGHT_BACKGROUND_CLASS, remove: DAY_BACKGROUND_CLASS },
      { element: 'cardHeader', add: DARK_MODE_CLASS, remove: LIGHT_MODE_CLASS },
      { element: 'degreeLabel', add: DARK_MODE_CLASS, remove: LIGHT_MODE_CLASS },
    ]);
  } else {
    toggleClasses(elements, [
      { element: 'cardBody', add: LIGHT_MODE_CLASS, remove: DARK_MODE_CLASS },
      { element: 'mainContainer', add: DAY_BACKGROUND_CLASS, remove: NIGHT_BACKGROUND_CLASS },
      { element: 'cardHeader', add: LIGHT_MODE_CLASS, remove: DARK_MODE_CLASS },
      { element: 'degreeLabel', add: LIGHT_MODE_CLASS, remove: DARK_MODE_CLASS },
    ]);
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
    switchDarkModeIfNecessary(response.is_day);
  } else {
    cityCountryFields[0].textContent = 'Sorry, there was a problem retrieving the weather data';
  }
}

export default
showDataInWeatherCard;
