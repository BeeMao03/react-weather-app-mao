import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse() {}

  const apiKey = "001bc651977f4b024af4d84282b0f02a";
  const longitude = props.coordinates.lon;
  const latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast mt-3">
      <div className="row">
        <div className="col">
          <div className="forecastDay mb-3">Thu</div>
          <WeatherIcon code="01d" size={100} />
          <div className="forecastTemperature mt-2">
            <span className="forecastTemperatureMax">19°</span>
            {"  "}
            <span className="forecastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
