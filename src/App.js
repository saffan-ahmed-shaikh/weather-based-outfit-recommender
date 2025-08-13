import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import OutfitRecommendation from "./components/OutfitRecommendation";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCitySearch = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    const apiKey = process.env.REACT_APP_OWM_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("City not found or API error");
      }
      const data = await res.json();
      setWeather({
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main,
        wind: data.wind.speed,
        humidity: data.main.humidity,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2>Weather-Based Outfit Recommender</h2>
      <SearchBar onSearch={handleCitySearch} />
      <WeatherDisplay weather={weather} loading={loading} error={error} />
      <OutfitRecommendation />
      <SearchHistory />
    </div>
  );
}

export default App;
