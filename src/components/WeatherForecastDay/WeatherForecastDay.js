import React from "react";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="temperatures">
        <span className="max">{Math.round(props.data.temp.max)}°</span>
        <span className="min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
