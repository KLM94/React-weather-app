import React, { Component } from "react";

const API_KEY = "673fcaf3e33a93347dd3e0b062564252";
class WeatherResult extends Component {
  state = {
    city: "birmingham",
    weatherData: []
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&apikey=${API_KEY}`
    )
      .then(buffer => buffer.json())
      .then(response => console.log(response))
      .catch(err => console.dir(err));
  }

  render() {
    return <div></div>;
  }
}

export default WeatherResult;
