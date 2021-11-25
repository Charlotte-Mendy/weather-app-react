import React from "react";
import axios from "axios";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

import "./WeatherForecast.scss";

export default function WeatherForecast(props) {
  // Callback : response from API
  function handleResponse(response) {
    console.log(response.data);
  }

  // API URL parts
  const apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "28b9d612e5561ca93f5281f8f4a821aa";

  // Complete API URL
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  // API call
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row forecast-section pt-3">
        <div className="col forecast-item d-flex justify-content-evenly d-md-block justify-content-md-center">
          <div className="day">Day</div>
          <WeatherIcon code="01d" size={32} />
          <div className="temperatures">
            <span className="max">19°</span>
            <span className="min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
