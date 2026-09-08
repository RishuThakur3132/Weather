import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState([]);

  const API_KEY = "5680957f9d849af58cfd5aa64bd7800e";

  const cities = [
    "Shimla",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chandigarh",
    "Jaipur",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Manali",
    "Panipat",
  ];

  useEffect(() => {
    async function getWeather() {
      try {
        const result = await Promise.all(
          cities.map(async (city) => {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            const data = await response.json();

            console.log(data);

            return data;
          })
        );

        setWeather(result);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getWeather();
  }, []);

  return (
    <div className="weather-container">
      <h1>Weather Application</h1>

      <div className="weather-grid">
        {weather.map((city) => (
          <div className="weather-card" key={city.id}>
            <h2>{city.name}</h2>

            <h3>{Math.round(city.main.temp)}°C</h3>

            <p className="condition">
              {city.weather[0].description}
            </p>

            <p>💧 Humidity: {city.main.humidity}%</p>

            <p>🌡️ Feels Like: {Math.round(city.main.feels_like)}°C</p>

            <p>💨 Wind: {city.wind.speed} m/s</p>

            <p>⏱️ Pressure: {city.main.pressure} hPa</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;