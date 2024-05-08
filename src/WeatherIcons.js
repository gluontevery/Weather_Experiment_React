import React from 'react';
import ReactAnimatedWeather from "react-animated-weather";
 
 
export default function WeatherIcons(props) {
  return (
    <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={props.size}
        animate={props.animate}
    />
  )
}
 