import { getWeatherLocation } from "./api/weather";
import { getWeatherData } from "./service/weatherService";

console.log('raw: '+getWeatherLocation('bogota'));
console.log('from service: '+getWeatherData('bogota'));
