import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "../WeatherForecastDay/WeatherForecastDay";

import "./WeatherForecast.scss";

export default function WeatherForecast(props) {
  // State
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  // When coordinates change, set state to false to do a new API call to re-render the forecast component accordingly
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  // Callback : response from API
  function handleResponse(response) {
    // Update UI
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  // Conditional rendering
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row forecast-section pt-3 d-flex justify-content-evenly ">
          {forecastData.map(function (dailyForecast, index) {
            // Loop through forecast data to display forecast for each single day
            if (index < 5) {
              return (
                <div className="col-md-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    // API URL parts
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "c7886f27caa9e4c072b704b3e1d15720";

    // Complete API URL
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

    // API call
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
