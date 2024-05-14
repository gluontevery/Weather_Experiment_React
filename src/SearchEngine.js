import React, { useState } from "react";
import Weather from "./Weather";

import "./styles.css";
let temp = "";

export default function SearchEngine() {
  console.log("Exeqution SearchEngine");
  let [cityName, newCityName] = useState("");
  //let [message, newMessage] = useState("");

  function updateCityName(event) {
    event.preventDefault();
    temp = event.target.value;
    //newCityName(event.target.value);
  }

  function getAlert(event) {
    console.log("11");
    event.preventDefault();
    if (temp === "") {
      alert(`Enter a city name!`);
    } else {
      newCityName(temp);
      console.log(temp);
    }
  }

  function staticCityName(event, cityName) {
    event.preventDefault();
    newCityName(cityName);

    console.log(`city = ${cityName}`);
  }

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <a
              className="defaultCity"
              href="/"
              onClick={(event) => staticCityName(event, "Odessa")}
            >
              Odessa
            </a>
          </div>
          <div className="col">
            <a
              className="defaultCity"
              href="/"
              onClick={(event) => staticCityName(event, "Zatoka")}
            >
              Zatoka
            </a>
          </div>
          <div className="col">
            <a
              className="defaultCity"
              href="/"
              onClick={(event) => staticCityName(event, "Tübingen")}
            >
              Tübingen
            </a>
          </div>
          <div className="col">
            <a
              className="defaultCity"
              href="/"
              onClick={(event) => staticCityName(event, "Dresden")}
            >
              Dresden
            </a>
          </div>
          <div className="col">
            <a
              className="defaultCity"
              href="/"
              onClick={(event) => staticCityName(event, "Berlin")}
            >
              Berlin
            </a>
          </div>
        </div>
      </div>
      <br />
      <form className="searchForm" onSubmit={getAlert}>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a city name ..."
              onChange={updateCityName}
            />
          </div>
          <div className="col-3">
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div>
        <Weather city={cityName} />
      </div>
    </div>
  );
}
