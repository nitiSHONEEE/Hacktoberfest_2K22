function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);

  const celsiusValue = Math.round(((valNum - 32) / 1.8) * 10) / 10;

  document.getElementById("outputCelsius").innerHTML = celsiusValue;
}