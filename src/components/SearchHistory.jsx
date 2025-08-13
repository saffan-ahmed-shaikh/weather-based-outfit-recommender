import React from "react";

const SearchHistory = ({ history, onHistoryClick }) => (
  <div
    style={{
      marginTop: "1rem",
      minHeight: 40,
      background: "#eee",
      borderRadius: 4,
      padding: 8,
    }}
  >
    <strong>Search History:</strong>
    {history.length === 0 ? (
      <div>
        <em>No recent searches.</em>
      </div>
    ) : (
      <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
        {history.map((city, idx) => (
          <li key={city + idx}>
            <button
              onClick={() => onHistoryClick(city)}
              style={{
                background: "none",
                border: "none",
                color: "#0074d9",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "1em",
                padding: 0,
                margin: "0.25em 0",
              }}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SearchHistory;
