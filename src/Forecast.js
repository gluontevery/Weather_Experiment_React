import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcons from "./WeatherIcons";

import "./forecast.css";

export default function Forecast(props) {
  const apiKey = props.apiKey;
  let [forecast, newForecast] = useState([
    {
      dt: 100,
      temp: {
        max: 20,
        min: 10,
      },
      weather: [
        {
          icon: "20d",
        },
      ],
    },
    {
      dt: 100,
      temp: {
        max: 20,
        min: 10,
      },
      weather: [
        {
          icon: "20d",
        },
      ],
    },
  ]);

  const lat = typeof props.lat === "number" ? props.lat : 0;
  const lon = typeof props.lon === "number" ? props.lon : 0;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${apiKey}&units=metric`;

  function apiRequest() {
    function getData(response) {
      console.log(response);
      newForecast(response.data.daily);
    }

    axios.get(apiUrl).then(getData);
  }

  useEffect(apiRequest, [apiUrl]);

  function day(time) {
    var a = new Date(time * 1000);
    var days = ["Sun", "Mon", "Tue", "Wen", "Thi", "Fri", "Sat"];
    var dayOfWeek = days[a.getDay()];

    return dayOfWeek;
  }

  return (
    <div className="row">
      <br />
      <br />
      <div className="fade_rule"></div>
      <br />
      <br />
      {forecast.map((oneDayForecast, index) => {
        if (index < 7) {
          return (
            <div className="col">
              <div>{day(oneDayForecast.dt)}</div>
              <div>
                <WeatherIcons
                  icon={oneDayForecast.weather[0].icon}
                  color="goldenrod"
                  size={30}
                />{" "}
              </div>
              <div>
                <span className="tMax">
                  {Math.round(oneDayForecast.temp.max)}°
                </span>
                <span className="tMin">
                  {Math.round(oneDayForecast.temp.min)}°
                </span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
