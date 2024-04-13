import { getWeatherLocation } from "../api/weather";

async function getWeatherData(city){
    const weatherData = await getWeatherLocation(city);
    const response = {
        'city': weatherData.location.name,
        'country' : weatherData.location.country,
        'feelsLike_c' : weatherData.current.feelslike_c,
        'temp_c' : weatherData.current.temp_c,
        'is_day' : weatherData.current.is_day === 1 ? true : false
    }

    return response;
}

export {getWeatherData}