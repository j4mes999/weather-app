const currentTemperatureValues = [];

function toFarenheit(cValue) {
  const farenheitTemp = ((9 / 5) * cValue) + 32;
  return Math.round(farenheitTemp * 10) / 10;
}

function toCelsius(fValue) {
  const celsiusTemp = (fValue - 32) * (5 / 9);
  return Math.round(celsiusTemp * 10) / 10;
}

function changeUnits(temperature, feelsLike) {
  const temperatureField = document.querySelector('.temp-number');
  temperatureField.textContent = temperature;
  const feelsLikeField = document.querySelector('.feels-like > .number');
  feelsLikeField.textContent = feelsLike;
  currentTemperatureValues[0] = temperature;
  currentTemperatureValues[1] = feelsLike;
}

function drawFarenheitResult() {
  const fTemperature = toFarenheit(currentTemperatureValues[0]);
  const fFeelsLike = toFarenheit(currentTemperatureValues[1]);

  changeUnits(fTemperature, fFeelsLike);
}

function drawCelsiusResult() {
  const cTemperature = toCelsius(currentTemperatureValues[0]);
  const cFeelsLike = toCelsius(currentTemperatureValues[1]);

  changeUnits(cTemperature, cFeelsLike);
}

export { changeUnits, drawFarenheitResult, drawCelsiusResult };
