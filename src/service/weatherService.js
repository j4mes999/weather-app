import getWeatherLocation from '../api/weather';

async function getWeatherData(city) {
  const weatherData = await getWeatherLocation(city);

  console.log('weatherService.js http headers', weatherData.code);
  if (weatherData.code === 200) {
    console.log('weatherService.js inside the 200!');
    const response = {
      code: weatherData.code,
      city: weatherData.location.name,
      country: weatherData.location.country,
      feelsLike_c: weatherData.current.feelslike_c,
      temp_c: weatherData.current.temp_c,
      is_day: weatherData.current.is_day === 1,
    };
    return response;
  }

  return weatherData;
}

export default getWeatherData;
