import React from "react";

const WeatherDisplay = ({ weather, loading, error }) => {
  if (loading) return <div>Loading weather...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!weather) return <em>Weather info will be shown here.</em>;

  return (
    <div
      style={{
        marginBottom: "1rem",
        background: "#f9f9f9",
        borderRadius: 4,
        padding: 8,
      }}
    >
      <strong>{weather.city}</strong>
      <div>Temperature: {weather.temp}°C</div>
      <div>Condition: {weather.condition}</div>
      <div>Wind Speed: {weather.wind} m/s</div>
      <div>Humidity: {weather.humidity}%</div>
    </div>
  );
};

export default WeatherDisplay;
