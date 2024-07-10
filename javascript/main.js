// Get the elements in the DOM
const input = document.querySelector(".zipcode"); // Get the input box element
const btn = document.querySelector(".search-button"); // Get the search button element
const form = document.querySelector("form"); // Get form elements 

const CITY_NAME = document.querySelector(".city_name"); // Get the element that displays the city name
const CITY_TEMP = document.querySelector(".temperature"); // Get the element that displays the temperature

// Define functions to get weather data
const getWeatherData = (zip) => {
  // Store your OpenWeather API key.
  const API_KEY = "4e9a6db91f3553bbfd4d65a1c87e4f9e";
  // Store API endpoints and API keys
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      // Store the requested data
      const local_weather_data = data;
      // Update city name content
      CITY_NAME.textContent = local_weather_data.name;
      // Process temperature data and update content
      const weather_in_celsius = Math.round(local_weather_data.main.temp - 273);
      CITY_TEMP.textContent = weather_in_celsius + " C";
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

// Get user-entered zip code and get weather data
const getZipcode = (e) => {
  e.preventDefault();
  const ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

// Add a click event listener for the button
btn.addEventListener('click', getZipcode);
