import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
