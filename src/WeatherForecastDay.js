import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay mb-2">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={100} />
      <div className="forecastTemperature mt-2">
        <span className="forecastTemperatureMax">
          {Math.round(props.data.temp.max)}°
        </span>
        {"  "}
        <span className="forecastTemperatureMin">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
