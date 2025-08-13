import React, { useState, useRef } from "react";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const GEO_API_KEY = "5f628abcc5mshcb976bc413de891p18bc03jsn287e19ba5686";

const fetchCitySuggestions = async (query) => {
  if (!query) return [];
  try {
    const res = await fetch(
      `${GEO_API_URL}?namePrefix=${encodeURIComponent(query)}&limit=5`,
      {
        headers: {
          "X-RapidAPI-Key": GEO_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data.map((city) => city.city);
  } catch {
    return [];
  }
};

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [inputError, setInputError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeout = useRef();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setInputError("");
    setShowSuggestions(true);

    // Clear any existing debounce timer
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    // Only call API if 3 or more characters are typed
    if (value.trim().length >= 3) {
      debounceTimeout.current = setTimeout(async () => {
        const sugg = await fetchCitySuggestions(value.trim());
        setSuggestions(sugg);
      }, 3000); // 3 seconds debounce
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setInputError("Please enter a city name.");
      return;
    }
    setInputError("");
    onSearch(city.trim());
    setCity("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "1rem", position: "relative" }}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
        autoComplete="off"
        style={{ padding: "0.5rem", width: "200px" }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      <button type="submit" style={{ marginLeft: "0.5rem" }}>
        Search
      </button>
      {inputError && (
        <div style={{ color: "red", marginTop: 4 }}>{inputError}</div>
      )}
      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "2.5rem",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            zIndex: 10,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {suggestions.map((s, idx) => (
            <li
              key={s + idx}
              style={{ padding: "0.5rem", cursor: "pointer" }}
              onMouseDown={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
