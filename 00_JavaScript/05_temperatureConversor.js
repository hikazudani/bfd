
function celsiusToFahrenheit(value){
    return value * 1.8 + 32;
}

function fahrenheitToCelsius(value){
    return (value -32) / 1.8;
}

function showTemperature(tempObj){
    console.log(`Temperature in Celsius: ${celsiusToFahrenheit(tempObj.value).toFixed(2)}`);
    console.log(`Temperature in Fahrenheit: ${fahrenheitToCelsius(tempObj.value).toFixed(2)}`);
}

const temperatureTest = {
    value : 42
};

showTemperature(temperatureTest);