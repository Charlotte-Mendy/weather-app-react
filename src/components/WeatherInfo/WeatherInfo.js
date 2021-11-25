import React from "react";

import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import FormattedDate from "../FormattedDate/FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-section">
        <div className="overview">
          <div className="col weather-main">
            <h1 className="location">{props.data.city}</h1>
            <div className="image">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={64}
              />
            </div>
          </div>
          <div className="col weather-details">
            <WeatherTemperature celsius={props.data.temperature} />
            <p className="description text-capitalize">
              {props.data.description}
            </p>
            <p className="update">
              Last update : <FormattedDate date={props.data.update} />
            </p>
          </div>
        </div>
      </div>
      <div className="row conditions-section">
        <div className="col conditions">
          <div className="col condition">
            <p className="humidity">
              Humidity :{" "}
              <span className="humidity-value">{props.data.humidity} </span>%
            </p>
          </div>
          <div className="col condition">
            <p className="wind">
              Wind : <span className="wind-value">{props.data.wind} </span>
              km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
