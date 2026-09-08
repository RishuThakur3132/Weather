import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = "5680957f9d849af58cfd5aa64bd7800e";

  const cities = [
    "Panipat",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chandigarh",
    "Jaipur",
    "Kolkata",
    "Karnataka",
    "Kerala",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Punjab",
    "Himachal Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await Promise.all(
          cities.map(async (city) => {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            const data = await response.json();

            return data;
          })
        );

        setWeatherData(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchWeather();
  }, []);

  return (

    <>
    <Header />

    <div className="weather-page">
      <h1>Weather Data</h1>

      <div className="weather-container">
        {weatherData.map((weather) => (
          <div className="weather-card" key={weather.id}>
            <h2>{weather.name}</h2>

            <div className="weather-info">
              <div className="weather-item">
                <span>Temperature</span>
                <strong>
                  {Math.round(weather.main.temp)}°C
                </strong>
              </div>

              <div className="weather-item">
                <span>Feels Like</span>
                <strong>
                  {Math.round(weather.main.feels_like)}°C
                </strong>
              </div>

              <div className="weather-item">
                <span>Humidity</span>
                <strong>
                  {weather.main.humidity}%
                </strong>
              </div>

              <div className="weather-item">
                <span>Pressure</span>
                <strong>
                  {weather.main.pressure} hPa
                </strong>
              </div>

              <div className="weather-item">
                <span>Wind Speed</span>
                <strong>
                  {weather.wind.speed} m/s
                </strong>
              </div>

              <div className="weather-item">
                <span>Condition</span>
                <strong>
                  {weather.weather[0].description}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;