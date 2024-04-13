import { getWeatherData } from "./service/weatherService";

const form = document.querySelector('form');
const city = document.getElementById('city');

form.addEventListener('submit', (event) => {

//   getWeatherData(city.value).then((response) => {
//     console.log('index.js response: ');
//     console.log(response);
//   });
  getResponseFromAPI();
  event.preventDefault();
});

async function getResponseFromAPI(){
    const response = await getWeatherData(city.value);
    console.log('outside of the then: ');
    console.log(response);
}
