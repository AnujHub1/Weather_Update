import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "781dc269872f4095356bb8a1e52ce8b2";

  let getWeatherInfo = async () => {
    try {
      let responce = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponce = await responce.json();
      console.log(jsonResponce);
      let result = {
        city: city,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_like,
        weather: jsonResponce.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (eve) => {
    try {
      eve.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>
            <b>
              <i>No such place exist!</i>
            </b>
          </p>
        )}
      </form>
    </div>
  );
}
