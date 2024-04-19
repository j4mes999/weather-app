const API_KEY = 'f3af90fc63dc468b94c123259240704';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';

function buildErrorResponse(error) {
  const errorData = {
    code: 400,
    message: error.message,
  };

  return errorData;
}

async function getWeatherLocation(city) {
  try {
    const response = await fetch(`${WEATHER_API_URL}?key=${API_KEY}&q=${city}`);
    const weatherData = await response.json();
    console.log(`weather.js data from api:${weatherData}`);
    return weatherData;
  } catch (error) {
    return buildErrorResponse(error);
  }
}

export default getWeatherLocation;
