import React from "react";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherForecastDay(props) {
  // Rounding max & min temperatures
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  // Formatting date
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day + 1];
  }

  return (
    <div className="WeatherForecastDay d-flex justify-content-evenly d-md-block justify-content-md-center mb-3">
      <div className="day col-2 col-md-12 mb-md-2">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={32}
        className="col-8 col-md-12"
      />
      <div className="temperatures col-2 col-md-12">
        <span className="max">{maxTemperature()}°</span>
        <span className="min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
