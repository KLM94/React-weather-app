import React from "react";

const WeatherInfo = ({ location, humidity, temperature, condition }) => {
  return (
    <div className="grid-container">
      <div class="grid-item">
        <head>
          {" "}
          <link
            href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <ul>
          <li className="location">Location: {location}</li>
          <li className="humidity">Humidity: {humidity}</li>
          <li className="temperature"> Temperature: {temperature} &deg;c</li>
          <li className="condition">Condition: {condition}</li>
        </ul>
      </div>
      <div className="bottom-grid-container">
        <div class="bottom-grid-item">
          <p>TEXTTT HEEERREEEE</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
