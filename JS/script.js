const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const API_key = "5f90dd261d85cb835eeea675a8358004"; // OpenWeather API key

const getCityCoordinates = (event) => {
  if (event.isTrusted) {
    const cityName = cityInput.value.trim();

    // URL for the Geocoding API
    const GeocodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`;

    if (!cityName) return;

    fetch(GeocodingApiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (!data.length) {
          return alert(`${cityName} is not found`);
        }
        const { id, lat, lon } = data[0];
        getWeatherDetails(id, lat, lon);
      })
      .catch(() => {
        alert("Error fetching");
      });
  }
};

