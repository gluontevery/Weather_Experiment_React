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
        The temperature in {props.city} is {Math.round(props.temperature)}°C
      </h3>
      <div className="listParameters">
        <ul className="listItems">
          <li> Description: {props.description} </li>
          <li> Humidity: {props.humidity} </li>
          <li> Wind: {props.windSpeed} km/h </li>
          <li> Clouds: {props.clouds}% </li>
          <li>
            <WeatherIcons icon={props.icon} color="goldenrod" size={25} />
          </li>
        </ul>
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
