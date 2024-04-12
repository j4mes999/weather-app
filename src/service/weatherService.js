import { getWeatherLocation } from "../api/weather";

async function getWeatherData(city){
    const response = await getWeatherLocation(city);
    
    console.log('weatherService.js celsius temp: '+response.current.feelslike_c);
}

export {getWeatherData}