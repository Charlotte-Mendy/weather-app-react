import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

import "./Weather.scss";

export default function Weather(props) {
  // State
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  // Callback : response from API
  function handleResponse(response) {
    // Update UI
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      update: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function searchCity() {
    // API URL parts
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let units = "metric";
    let apiKey = "b06c0cc420cc17168769847fa3e023fd";

    // Complete API URL
    const apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;

    // API call
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchCity();
  }

  function updateCity(e) {
    setCity(e.target.value);
  }

  // Conditional rendering
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row form-section pt-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8 col-md-10">
                <input
                  className="form-control"
                  id="search"
                  type="text"
                  placeholder="Enter a city"
                  aria-label="Enter a city"
                  onChange={updateCity}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
