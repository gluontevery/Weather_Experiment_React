import React, { useState } from "react";
import Weather from "./Weather";

import "./styles.css";
let temp = "";

export default function SearchEngine() {
  console.log("Exeqution SearchEngine")
  let [cityName, newCityName]=useState("");
  //let [message, newMessage] = useState("");
  
  
  function updateCityName(event) {
      event.preventDefault();
      temp = event.target.value;
      //newCityName(event.target.value);
  } 

  function getAlert(event) {
    console.log("11")
    event.preventDefault();
      if (temp === "") {
          alert(`Enter a city name!`);
      } else {
          newCityName(temp);
          console.log(temp)
      }
  } 

  return (
    <div className="App">
      
      <form className="searchForm" onSubmit={getAlert}>
            <input type="text" placeholder="Enter a city name ..." onChange={updateCityName}/>
            <input type="submit" value="Search" />
      </form>
      <div>
        <Weather city = {cityName} />
      </div>
    </div>
  );
}
