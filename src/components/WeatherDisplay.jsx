import React, { useEffect, useRef } from "react";

const WeatherDisplay = ({ weather, loading, error }) => {
  const cardRef = useRef();

  useEffect(() => {
    if (weather && cardRef.current) {
      cardRef.current.style.opacity = 0;
      setTimeout(() => {
        cardRef.current.style.transition = "opacity 0.5s";
        cardRef.current.style.opacity = 1;
      }, 50);
    }
  }, [weather]);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!weather) return <em>Weather info will be shown here.</em>;

  return (
    <div
      ref={cardRef}
      style={{
        marginBottom: "1rem",
        background: "#f9f9f9",
        borderRadius: 4,
        padding: 8,
        opacity: 1,
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
