const apiKey = "cd3fe422854cd1b6aa7a4d7a1d995edb";
const lat = 35.5396;
const lon = 140.3612;

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    // Clima actual
    const currentTemp = data.current.temp.toFixed(1);
    const weatherDesc = data.current.weather[0].description;

    document.getElementById("current-temp").textContent = `Current Temperature: ${currentTemp} °C`;
    document.getElementById("description").textContent = weatherDesc;

    // Pronóstico 3 días (excluyendo el día actual)
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";  // Limpia pronóstico previo

    // data.daily[0] es hoy, entonces tomamos daily[1], daily[2], daily[3]
    for(let i = 1; i <= 3; i++) {
      const dayData = data.daily[i];
      const date = new Date(dayData.dt * 1000); // convierte timestamp a fecha
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      const dateStr = date.toLocaleDateString(undefined, options);

      const dayTemp = dayData.temp.day.toFixed(1);
      const dayDesc = dayData.weather[0].description;

      // Crear un div para mostrar cada día
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("forecast-day");
      dayDiv.innerHTML = `
        <strong>${dateStr}</strong><br>
        Temp: ${dayTemp} °C<br>
        ${dayDesc}
      `;

      forecastContainer.appendChild(dayDiv);
    }
  })
  .catch(err => console.error("Error fetching weather data:", err));
