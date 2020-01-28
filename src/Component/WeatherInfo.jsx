import React from "react";

const WeatherInfo = ({ weatherData }) => {
  console.log(weatherData.weather);
  return (
    <ul>
      <li>Location: {weatherData.name}</li>
      {/* <li> Temperature: {weatherData.main.temp}</li> */}
      {/* <li>condition: {weatherData.weather}</li> */}
    </ul>
  );
};

export default WeatherInfo;
