import React, { Component } from "react";
import axios from "axios";
import WeatherInput from "./WeatherInput";
import API_KEY from "../api-key";
import WeatherInfo from "./WeatherInfo";

class WeatherResult extends Component {
  state = {
    city: "birmingham",
    weatherData: []
  };

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&apikey=${API_KEY}`
      )
      .then(response => this.setState({ weatherData: response.data }))
      .catch(err => console.dir(err));
  }

  render() {
    console.log(this.state.weatherData);
    return (
      <div>
        <WeatherInput />
        <WeatherInfo weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default WeatherResult;
