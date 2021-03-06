const clearDisplay = document.getElementById("clearInput");
const tempDisplay = document.getElementById("tempDisplay");
const tempInput = document.getElementById("tempInput");
const tempOutput = document.getElementById("tempOutput");
const outputF = document.getElementById("outputF");
const outputC = document.getElementById("outputC");

function toCelsius () {
  let inTemp = tempInput.value;
  let outTemp = Math.round((inTemp - 32) * (5 / 9));
  tempOutput.innerHTML = outTemp + "&#176;" + "C";
  colorize(false, outTemp);
}

function toFahrenheit () {
  let inTemp = tempInput.value;
  let outTemp = Math.round(inTemp * (9 / 5) + 32);
  tempOutput.innerHTML = outTemp + "&#176;" + "F";
  colorize(outTemp, false);
}

function colorize (tempF, tempC) {
  let comparison = tempF ? tempF : tempC;
  let comparor = tempF ? [32, 90] : tempC ? [0, 32] : false;
  if (comparison < comparor[0]) {
    tempOutput.style.color = "blue";
  } else if (comparison > comparor[1]) {
    tempOutput.style.color = "red";
  } else {
    tempOutput.style.color = "green";
  }
}
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  let checkF = clickEvent.originalTarget.form[1]["checked"];
  let checkC = clickEvent.originalTarget.form[2]["checked"];
  if (!tempInput.value) {
    tempOutput.innerHTML = "Please input a value."
  } else if (checkC) {
    toCelsius();
  } else if (checkF){
    toFahrenheit();
  } else {
    tempOutput.innerHTML = "Please select a temperature to convert to."
  }
}

// Assign a function to be executed when the button is clicked
tempDisplay.addEventListener("click", determineConverter);
clearInput.addEventListener("click", () => {
  tempInput.value = '';
});
