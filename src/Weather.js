import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./WeatherList";

export default function Weather(props) {
  //let forecast = [];
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
      ]);
      console.log("Exequted setTemperature");
      console.log(response.data.clouds.all);
      //console.log(forecast);
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
    return (
      <div>
        <WeatherList
          temperature={forecast[0]}
          description={forecast[1]}
          humidity={forecast[2]}
          windSpeed={forecast[3]}
          clouds={forecast[4]}
          icon={forecast[5]}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h3>The searching engine waits for the city name...</h3>
      </div>
    );
  }
}
