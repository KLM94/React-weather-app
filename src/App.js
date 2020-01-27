import React from "react";
import "./App.css";
import Header from "./Component/Header";
import WeatherResult from "./Component/WeatherResult";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WeatherResult />
      </div>
    );
  }
}

export default App;
