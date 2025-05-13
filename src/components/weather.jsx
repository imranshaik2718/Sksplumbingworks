// src/WeatherApp.jsx

import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found!");
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoData.results[0];


      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.current_weather);

    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">🌦️ Weather App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="border p-2 rounded-lg flex-1 outline-none"
          />
          <button
            onClick={getWeather}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {weather && (
          <div className="text-center mt-4">
            <p className="text-xl mb-2">🌡️ {weather.temperature}°C</p>
            <p className="text-lg mb-2">💨 Wind: {weather.windspeed} km/h</p>
            <p className="text-lg mb-2">🧭 Direction: {weather.winddirection}°</p>
            <p className="text-lg">
              {weather.is_day ? "☀️ Daytime" : "🌙 Night"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
