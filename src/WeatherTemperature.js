import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          <strong> °C </strong>
          <span className="bar">|</span>{" "}
          <a href="/" onClick={convertFarenheit}>
            °F
          </a>{" "}
        </span>
        <div className="highlowtemp">
          H: <strong className="temp">{Math.round(props.celsiusMax)}°</strong> |
          L: <strong className="temp">{Math.round(props.celsiusMin)}°</strong>{" "}
        </div>
      </span>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    let farenheitMax = (props.celsiusMax * 9) / 5 + 32;
    let farenheitMin = (props.celsiusMin * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(farenheit)}</span>{" "}
        <span className="unit">
          <a href="/" onClick={convertCelsius}>
            °C
          </a>{" "}
          <span className="bar">|</span> <strong>°F </strong>{" "}
        </span>
        <div className="highlowtemp">
          H: <strong className="temp">{Math.round(farenheitMax)}°</strong> | L:{" "}
          <strong className="temp">{Math.round(farenheitMin)}°</strong>{" "}
        </div>
      </span>
    );
  }
}
