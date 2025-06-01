const apiKey = "71c44a5b9f22af0a9f0e9244d17d4d75"; //  API key 71c44a5b9f22af0a9f0e9244d17d4d75

const lat = 35.5396;
const lon = 140.3612;

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const currentTemp = data.current.temp.toFixed(1);
    const weatherDesc = data.current.weather[0].description;
    document.getElementById("current-temp").textContent = `Current Temperature: ${currentTemp} °C`;
    document.getElementById("description").textContent = weatherDesc;

    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const day = data.daily[i];
      const date = new Date(day.dt * 1000);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      forecastContainer.innerHTML += `<p>${dayName}: ${day.temp.day.toFixed(1)} °C</p>`;
    }
  })
  .catch(err => console.error("Error fetching weather data:", err));
