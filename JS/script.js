const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const API_key = "5f90dd261d85cb835eeea675a8358004";//OpenWeather API key


const getCityCoordinates = () =>{
    const cityName = cityInput.value.trim();

    // https://openweathermap.org/api/geocoding-api
    const GeocodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`;

    if(!cityName) return;    
    // console.log(cityName);

    fetch(GeocodingApiUrl).then(res => res.json()).then(data =>{
        console.log(data);
    }).catch(()=>{
        alert("Error fetching");
    })

}

searchButton.addEventListener("click", getCityCoordinates);