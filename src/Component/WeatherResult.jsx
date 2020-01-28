import React, { Component } from "react";
import axios from "axios";
import WeatherInput from "./WeatherInput";
import API_KEY from "../api-key";
import WeatherInfo from "./WeatherInfo";

class WeatherResult extends Component {
  state = {
    city: "",
    location: "",
    temperature: "",
    humidity: "",
    condition: ""
  };

  updateCity = city => {
    this.setState({ city });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&apikey=${API_KEY}`
        )
        .then(response =>
          this.setState({
            location: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            condition: response.data.weather[0].description
          })
        )
        .catch(err => console.dir(err));
    }
  }

  render() {
    console.log(this.state.city);
    const { location, temperature, humidity, condition } = this.state;
    return (
      <div>
        <WeatherInput updateCity={this.updateCity} />
        <WeatherInfo
          location={location}
          temperature={temperature}
          humidity={humidity}
          condition={condition}
        />
      </div>
    );
  }
}

export default WeatherResult;
