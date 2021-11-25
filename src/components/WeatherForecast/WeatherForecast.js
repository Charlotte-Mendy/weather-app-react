import React from "react";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

import "./WeatherForecast.scss";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row forecast-section">
        <div className="col forecast-item">
          <div className="day">Day</div>
          <WeatherIcon code="01d" size="32" />
          <div className="temperatures">
            <span className="max">19°</span>
            <span className="min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
