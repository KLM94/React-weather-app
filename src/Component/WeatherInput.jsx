import React from "react";

const WeatherInput = props => {
  return (
    <form>
      <label>
        City:
        <input></input>
      </label>
      <button onSubmit={handleSubmit}>Search</button>
    </form>
  );
};

const handleSubmit = event => {
  event.preventDefault();
};

export default WeatherInput;
