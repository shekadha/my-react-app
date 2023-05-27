import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: "Wednesday 8:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date} </li>
          <li className="text-capitalize">{weatherData.description} </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">C</span>
          </div>
          <div className="col-6">
            <ui>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ui>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "3c949ba49d38be2487ee278e0d2d4059";
    let city = "London";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric `;
    axios.get(apiurl).then(handleSubmit);
  }
}
