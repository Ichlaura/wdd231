const apiKey = "cd3fe422854cd1b6aa7a4d7a1d995edb";
const lat = 35.5396;
const lon = 140.3612;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const currentTemp = data.main.temp.toFixed(1);
    const weatherDesc = data.weather[0].description;
    document.getElementById("current-temp").textContent = `Current Temperature: ${currentTemp} °C`;
    document.getElementById("description").textContent = weatherDesc;
  })
  .catch(err => console.error("Error fetching weather data:", err));
