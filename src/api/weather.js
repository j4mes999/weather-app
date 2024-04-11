const API_KEY = 'f3af90fc63dc468b94c123259240704';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';

async function getWeatherLocation(city){
  const response = await fetch(WEATHER_API_URL+'?key=' + API_KEY + '&q=' + city);
  const weatherData = await response.json();

  return weatherData;
}

export {getWeatherLocation};