import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./weatherStyles.css";

export default function WeatherList(props) {
  //let [forecast, newForecast] = useState([null, null, null, null, null]);

  console.log("Exequted WeatherList");

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
            {Math.round(props.temperature)}
            <span className="units">°C</span>{" "}
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
        This scool-project coded by{" "}
        <a href="https://github.com/gluontevery">Tatiana Tatarchuk</a> in frame
        of <a href="https://www.shecodes.io/">SheCodes</a> online course.
      </p>
    </div>
  );
}
