import React, { useState } from "react";
import axios from "axios";

import "./Weather.scss";

export default function Weather() {
  // State
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);

  // Callback : response from API
  function handleResponse(response) {
    // Display only when get response
    setLoaded(true);

    // Update UI
    setTemperature(response.data.main.temp);
  }

  // Conditional rendering
  if (loaded) {
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
                {Math.round(temperature)}
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
  } else {
    // API URL parts
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let city = "London";
    let units = "metric";
    let apiKey = "28b9d612e5561ca93f5281f8f4a821aa";

    // Complete API URL
    const apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
    console.log(apiUrl);

    // API call
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
