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
  let weatherData;
  try {
    const response = await fetch(`${WEATHER_API_URL}?key=${API_KEY}&q=${city}`);
    if (!response.ok) {
      throw new Error(`There was an error invoking the API: ${response.statusText}`);
    } else {
      weatherData = await response.json();
      weatherData.code = 200;
    }

    // console.log(`weather.js data from api:${weatherData}`);
    // console.log(response.statusText);
    return weatherData;
  } catch (error) {
    console.log('weather.js inside catch!');
    return buildErrorResponse(error);
  }
}

export default getWeatherLocation;
