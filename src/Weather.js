import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./WeatherList";

export default function Weather(props) {
  let [forecast, newForecast] = useState([]);

  console.log("Exequted Weather");

  const apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  function apiRequest() {
    function setTemperature(response) {
      let icon = "";
      if (response.data.clouds.all < 20) {
        icon = "CLEAR_DAY";
      } else if (
        response.data.clouds.all >= 20 &&
        response.data.clouds.all < 75
      ) {
        icon = "PARTLY_CLOUDY_DAY";
      } else {
        icon = "CLOUDY";
      }

      newForecast([
        response.data.main.temp,
        response.data.weather[0].description,
        response.data.main.humidity,
        response.data.wind.speed,
        response.data.clouds.all,
        icon,
        response.data.dt,
      ]);
      console.log("Exequted setTemperature");
      console.log(response);
    }

    if (props.city !== "") {
      console.log(apiUrl);

      try {
        axios.get(apiUrl).then(setTemperature);
        console.log("Exequted axios request");
      } catch (err) {
        alert(`We have no any information about city you requested`);
        throw new Error("The search request is incorrect!");
      }
    }
  }

  useEffect(apiRequest, [props.city, apiUrl]);

  if (props.city !== "") {
    var a = new Date(forecast[6] * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = "";
    if (min < 10) {
      time =
        date + " " + month + " " + year + " " + hour + ":0" + min + ":" + sec;
    } else {
      time =
        date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    }
    return (
      <div>
        <WeatherList
          city={props.city}
          temperature={forecast[0]}
          description={forecast[1]}
          humidity={forecast[2]}
          windSpeed={forecast[3]}
          clouds={forecast[4]}
          icon={forecast[5]}
          time={time}
        />
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <h3>The searching engine waits for the city name...</h3>
        <br />
        <p className="footer">
          This scool-project coded by{" "}
          <a href="https://github.com/gluontevery">Tatiana Tatarchuk</a> in
          frame of <a href="https://www.shecodes.io/">SheCodes</a> online
          course.
        </p>
      </div>
    );
  }
}
