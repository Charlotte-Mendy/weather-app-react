import React from "react";
import axios from "axios";

import "./Weather.scss";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row form-section pt-3">
        <form>
          <div className="row">
            <div className="col-8 col-md-10">
              <input
                className="form-control"
                id="search"
                type="text"
                placeholder="Enter a city"
                aria-label="Enter a city"
              />
              <p className="error-message"></p>
            </div>
            <div className="col-4 col-md-2">
              <button className="btn btn-primary w-100" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row weather-section">
        <div className="overview">
          <div className="col weather-main">
            <h1 className="location">Paris</h1>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Clear sky"
              className="image"
            />
          </div>
          <div className="col weather-details">
            <p className="temperature">
              7
              <sup>
                <span className="unit">°C</span>
              </sup>
            </p>
            <p className="description">Sunny</p>
            <p className="update">
              Last update : <span className="update-value">Monday 09:00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row conditions-section">
        <div className="col conditions">
          <div className="col condition">
            <p className="humidity">
              Humidity : <span className="humidity-value">74</span>%
            </p>
          </div>
          <div className="col condition">
            <p className="wind">
              Wind : <span className="wind-value">19 </span>km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
