import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

import "./Weather.scss";

export default function Weather(props) {
  // State
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(null);

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

  // Callback : in case of error
  function handleError() {
    // If city undefined
    if (city.value === undefined) {
      setError("Please enter a valid city and try again");
    }
  }

  function searchCity() {
    // API URL parts
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let units = "metric";
    let apiKey = "c7886f27caa9e4c072b704b3e1d15720";

    // Complete API URL
    const apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;

    // API call
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchCity();
    // If an error occurs
    handleError();
    // Clear input & error message on the next submission
    setError("");
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
                  type="search"
                  placeholder="Enter a city"
                  aria-label="Enter a city"
                  onChange={updateCity}
                  autoFocus="on"
                />
                <p className="error-message pt-2">{error}</p>
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
