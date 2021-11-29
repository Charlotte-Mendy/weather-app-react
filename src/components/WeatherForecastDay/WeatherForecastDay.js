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
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="temperatures">
        <span className="max">{maxTemperature()}°</span>
        <span className="min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
