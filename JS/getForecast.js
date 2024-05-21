
const weatherCardsDetails = document.querySelector(".weather-cards")

const createWeatherCard = (weatherItem) => {
  return `
    <li class="card">
    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
    <img
      src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png"
      alt="weather-icon"
    />
    <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
    <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
    <h4>Humidity: ${weatherItem.wind.humidity}%</h4>
    </li>
  `;
};

const getWeatherDetails = (cityName, lat, lon) => {
  // Correct URL for the forecast API
  const weather_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`;

  fetch(weather_API_URL)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      //
      const uniqueForecastDays = [];

      const fiveDaysForecast = data.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();

        if (!uniqueForecastDays.includes(forecastDate)) {
          return uniqueForecastDays.push(forecastDate);
        }
      });
      console.log(fiveDaysForecast);

      fiveDaysForecast.forEach((weatherItem) => {
        weatherCardsDetails.insertAdjacentHTML("beforeend", createWeatherCard(weatherItem));
      });
    })
    .catch(() => {
      alert("Error fetching weather");
    });
};
