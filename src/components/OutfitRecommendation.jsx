import React from "react";

const getOutfitSuggestion = (weather) => {
  if (!weather) return null;

  const suggestions = [];

  // Condition-based suggestions
  const condition = weather.condition.toLowerCase();
  if (condition.includes("rain")) {
    suggestions.push("Take an umbrella");
    suggestions.push("Consider waterproof shoes");
  }
  if (condition.includes("sun")) {
    suggestions.push("Sunglasses suggested");
    suggestions.push("Apply sunscreen");
  }
  if (condition.includes("snow")) {
    suggestions.push("Wear boots");
    suggestions.push("Wear warm gloves");
  }
  if (condition.includes("cloud")) {
    suggestions.push("A light sweater may be handy");
  }

  // Temperature-based suggestions
  if (weather.temp < 5) {
    suggestions.push("Bundle up with a heavy coat");
    suggestions.push("Wear a scarf and hat");
  } else if (weather.temp < 15) {
    suggestions.push("Wear a jacket");
    suggestions.push("Long sleeves are recommended");
  } else if (weather.temp > 30) {
    suggestions.push("Stay hydrated");
    suggestions.push("Wear light, breathable clothes");
    suggestions.push("A hat can help with the heat");
  } else if (weather.temp > 25) {
    suggestions.push("Wear light clothes");
  } else {
    suggestions.push("Dress comfortably");
  }

  // Wind-based suggestions
  if (weather.wind && weather.wind > 10) {
    suggestions.push("It's windy—consider a windbreaker");
  }

  // Humidity-based suggestions
  if (weather.humidity && weather.humidity > 80) {
    suggestions.push("Humidity is high—choose moisture-wicking fabrics");
  }

  // Friendly closing suggestion
  suggestions.push("Have a great day!");

  // Remove duplicates and join with punctuation
  const uniqueSuggestions = [...new Set(suggestions)];
  return uniqueSuggestions.join(". ") + ".";
};

const OutfitRecommendation = ({ weather }) => (
  <div
    style={{
      marginBottom: "1rem",
      minHeight: 40,
      background: "#f1f1f1",
      borderRadius: 4,
      padding: 8,
    }}
  >
    <strong>Outfit Recommendation:</strong>
    <div>
      {weather ? (
        getOutfitSuggestion(weather)
      ) : (
        <em>Outfit recommendation will be shown here.</em>
      )}
    </div>
  </div>
);

export default OutfitRecommendation;
