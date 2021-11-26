import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

import "./WeatherForecast.scss";

export default function WeatherForecast(props) {
  // State
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  // Callback : response from API
  function handleResponse(response) {
    // Update UI
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  // Conditional rendering
  if (loaded) {
    console.log(forecastData);
    return (
      <div className="WeatherForecast">
        <div className="row forecast-section pt-3">
          <div className="col forecast-item d-flex justify-content-evenly d-md-block justify-content-md-center">
            <div className="day">Day</div>
            <WeatherIcon code="01d" size={32} />
            <div className="temperatures">
              <span className="max">{forecastData[0].temp.max}°</span>
              <span className="min">{forecastData[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // API URL parts
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "b06c0cc420cc17168769847fa3e023fd";

    // Complete API URL
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

    // API call
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
