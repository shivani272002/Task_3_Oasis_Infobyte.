document.getElementById("convertBtn").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var convertedTemperature;
    var unitLabel;

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        unitLabel = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
        unitLabel = "Celsius";
    } else if (unit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        unitLabel = "Kelvin";
    }

    if (!isNaN(convertedTemperature)) {
        document.getElementById("result").innerHTML = convertedTemperature.toFixed(2) + " " + unitLabel;
    } else {
        document.getElementById("result").innerHTML = "Invalid input";
    }
});
