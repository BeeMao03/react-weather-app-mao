import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />,{" "}
          <span className="text-capitalize">{props.data.description}</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={150} />
            <WeatherTemperature
              celsius={props.data.temperature}
              celsiusMax={props.data.highTemp}
              celsiusMin={props.data.lowTemp}
            />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span className="info">{props.data.humidity} %</span>
            </li>
            <li>
              Wind: <span className="info">{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
