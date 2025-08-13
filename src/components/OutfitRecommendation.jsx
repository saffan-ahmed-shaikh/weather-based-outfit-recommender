import React from "react";

const getOutfitSuggestion = (weather) => {
  if (!weather) return null;

  const suggestions = [];

  // Condition-based suggestions
  if (weather.condition.toLowerCase().includes("rain")) {
    suggestions.push("Take an umbrella.");
  }
  if (weather.condition.toLowerCase().includes("sun")) {
    suggestions.push("Sunglasses suggested.");
  }

  // Temperature-based suggestions
  if (weather.temp < 15) {
    suggestions.push("Wear a jacket.");
  } else if (weather.temp > 25) {
    suggestions.push("Wear light clothes.");
  } else {
    suggestions.push("Dress comfortably.");
  }

  return suggestions.join(" ");
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
