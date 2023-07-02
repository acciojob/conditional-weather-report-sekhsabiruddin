import React from "react";
// import "./index.css"; // Make sure to import your CSS file

const WeatherApp = ({ weather }) => {
  const temperature = weather.temperature;
  const conditions = weather.conditions;
  const threshold = 20;

  const temperatureColor = temperature > threshold ? "red" : "blue";

  return (
    <div>
      <h1>Weather App</h1>
      <div className="weather-container">
        <div
          style={{
            fontSize: "24px",
            padding: "10px",
            color: temperatureColor,
          }}
        >
          {temperature}°C
        </div>
        <div className="conditions">{conditions}</div>
      </div>
    </div>
  );
};

export default WeatherApp;
