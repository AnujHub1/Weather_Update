import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InFoBox from "./InFoBox";

export default function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({
    city: "delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setweatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InFoBox info={weatherInfo} />
    </div>
  );
}
