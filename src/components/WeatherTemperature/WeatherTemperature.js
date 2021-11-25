import React, { useState } from "react";

export default function WeatherTemperature(props) {
  // State
  const [unit, setUnit] = useState("celsius");

  // Update UI
  function displayFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  // Convert °C to °F
  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  //  Conditional rendering
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p className="temperature">
          {Math.round(props.celsius)}
          <sup>
            <span className="unit">
              °C |{" "}
              <a href="/" onClick={displayFahrenheit}>
                °F
              </a>
            </span>
          </sup>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <p className="temperature">
          {Math.round(convertToFahrenheit())}
          <sup>
            <span className="unit">
              <a href="/" onClick={displayCelsius}>
                °C
              </a>{" "}
              | °F
            </span>
          </sup>
        </p>
      </div>
    );
  }
}
