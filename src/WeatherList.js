import React, { useState, useEffect } from "react";
import WeatherIcons from "./WeatherIcons";

import "./weatherStyles.css";

export default function WeatherList(props) {
  //const [temperature, setTemperature] = useState(props.temperature);

  const [temperature, setTemperature] = useState(
    typeof props.temperature === "number" ? props.temperature : 0
  );
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    if (typeof props.temperature === "number") {
      setTemperature(props.temperature);
    }
    setUnit("C");
  }, [props.temperature]);

  console.log(`temperature = ${temperature}`);
  console.log("Exequted WeatherList");

  function handleTemperatureChange(event, tempValue, newUnit) {
    setTemperature(tempValue);
    setUnit(newUnit);
    //console.log(`temperature = ${tempValue}`);
  }

  const celsiusStyle = unit === "C" ? { fontWeight: "bold" } : {};
  const fahrenheitStyle = unit === "F" ? { fontWeight: "bold" } : {};

  return (
    <div>
      <br />
      <h3>
        Today <span className="date">{props.time}</span> the weather in{" "}
        {props.city} is:
      </h3>
      <div className="row">
        <div className="col-4">
          <WeatherIcons icon={props.icon} color="goldenrod" size={55} />{" "}
          <span className="temperature">
            {Math.round(temperature)}
            <span
              className="units"
              style={celsiusStyle}
              onClick={(event) =>
                handleTemperatureChange(event, props.temperature, "C")
              }
            >
              °C
            </span>
            <span
              className="units"
              style={fahrenheitStyle}
              onClick={(event) =>
                handleTemperatureChange(
                  event,
                  (props.temperature * 9) / 5 + 32,
                  "F"
                )
              }
            >
              |F
            </span>
          </span>
        </div>
        <div className="col-8">
          <div className="listParameters">
            <ul className="listItems">
              <li> Description: {props.description} </li>
              <li> Humidity: {props.humidity} </li>
              <li> Wind: {props.windSpeed} km/h </li>
              <li> Clouds: {props.clouds}% </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <p className="footer">
        This project coded by{" "}
        <a href="https://github.com/gluontevery">Tatiana Tatarchuk</a> in the
        frame of <a href="https://www.shecodes.io/">SheCodes</a> online course.
      </p>
    </div>
  );
}
