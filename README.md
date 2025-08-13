# Weather-Based Outfit Recommender

A simple weather dashboard where users enter a city name to see current weather and get an outfit suggestion.

## Getting Started

Instructions for installing dependencies and running the app will be added as development progresses.

## Features (Planned)

- City search with weather fetch
- Weather display (temperature, condition, wind, humidity)
- Outfit recommendations
- Search history

## Development Progress

### UI Skeleton & City Search Input

- Set up main layout with placeholder components for weather, outfit, and history.
- Implemented controlled input for city search (no API call yet).

### Weather API Integration

- Connected city search to OpenWeatherMap API.
- Displays temperature, condition, wind speed, and humidity.
- Handles loading and error states.

### Outfit Recommendation

- Added simple logic for outfit suggestions based on temperature and weather condition.
- Examples: "Take an umbrella" if rainy, "Wear a jacket" if cold, "Sunglasses suggested" if sunny.

### Search History

- Displays the last 5 searched cities.
- Users can click a city in the history to re-fetch its weather.
