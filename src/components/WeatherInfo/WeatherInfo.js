import React from "react";

import FormattedDate from "../FormattedDate/FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-section">
        <div className="overview">
          <div className="col weather-main">
            <h1 className="location">{props.data.city}</h1>
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="image"
            />
          </div>
          <div className="col weather-details">
            <p className="temperature">
              {Math.round(props.data.temperature)}
              <sup>
                <span className="unit">°C</span>
              </sup>
            </p>
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
