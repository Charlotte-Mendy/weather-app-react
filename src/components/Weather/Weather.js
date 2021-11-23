import React, { useState } from "react";
import axios from "axios";

import "./Weather.scss";

export default function Weather(props) {
  // State
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  // Callback : response from API
  function handleResponse(response) {
    // console.log(response.data);

    // Update UI
    setWeatherData({
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      update: "Monday 09:00",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });

    // Display only when get response
    setLoaded(true);
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
              <h1 className="location">{weatherData.city}</h1>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="image"
              />
            </div>
            <div className="col weather-details">
              <p className="temperature">
                {Math.round(weatherData.temperature)}
                <sup>
                  <span className="unit">°C</span>
                </sup>
              </p>
              <p className="description text-capitalize">
                {weatherData.description}
              </p>
              <p className="update">
                Last update :{" "}
                <span className="update-value">{weatherData.update}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row conditions-section">
          <div className="col conditions">
            <div className="col condition">
              <p className="humidity">
                Humidity :{" "}
                <span className="humidity-value">{weatherData.humidity} </span>%
              </p>
            </div>
            <div className="col condition">
              <p className="wind">
                Wind : <span className="wind-value">{weatherData.wind} </span>
                km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // API URL parts
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let units = "metric";
    let apiKey = "28b9d612e5561ca93f5281f8f4a821aa";

    // Complete API URL
    const apiUrl = `${apiEndpoint}?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
    // console.log(apiUrl);

    // API call
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
