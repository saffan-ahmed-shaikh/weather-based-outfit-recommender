import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import OutfitRecommendation from "./components/OutfitRecommendation";
import SearchHistory from "./components/SearchHistory";

function App() {
  const handleCitySearch = (city) => {
    console.log("Search for:", city);
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
      <WeatherDisplay />
      <OutfitRecommendation />
      <SearchHistory />
    </div>
  );
}

export default App;
