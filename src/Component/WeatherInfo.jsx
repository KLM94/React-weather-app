import React from "react";

const WeatherInfo = ({ location, humidity, temperature, condition }) => {
  return (
    <ul>
      <li>Location: {location}</li>
      <li>Humidity: {humidity}</li>
      <li> Temperature: {temperature} &deg;c</li>
      <li>Condition: {condition}</li>
    </ul>
  );
};

export default WeatherInfo;
