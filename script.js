document.getElementById('searchButton').addEventListener('click', fetchWeather);

async function fetchWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'd32ba2538980acd5df6df9a4dd712d7f'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  if (data.cod === 200) {
    weatherInfo.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } else {
    weatherInfo.innerHTML = `<p>${data.message}</p>`;
  }
}
