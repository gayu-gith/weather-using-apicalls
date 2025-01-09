//Free API Key from OpenWeatherMap
const apiKey = "ebace1439498e09fc63a9ede6ee70139";
const apiBaseURL = "https://api.openweathermap.org/data/2.5/weather";
// Function to fetch weather data
async function fetchWeather(location) {
const weatherResultDiv = document.getElementById("weatherResult");
weatherResultDiv.innerHTML = "Loading...";
try {
const response = await fetch(
`${apiBaseURL}?q=${location}&appid=${apiKey}&units=metric`
);
if (!response.ok) {
throw new Error(`Location not found!`);
}
const data = await response.json();
displayWeather(data);
} catch (error) {
weatherResultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
console.error("Error fetching weather data:", error);
}
}
// Function to display weather data
function displayWeather(data) {
    const weatherResultDiv = document.getElementById("weatherResult");
    const { name, main, weather } = data;
    weatherResultDiv.innerHTML = `
    <h2>Weather in ${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Feels like: ${main.feels_like}°C</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Condition: ${weather[0].description}</p>
    `;
    }
    // Event listener for the button
    document.getElementById("getWeather").addEventListener("click", () => {
    const location = document.getElementById("location").value.trim();
    if (location) {
    fetchWeather(location);
    } else {
    document.getElementById("weatherResult").innerHTML =
    '<p style="color:red;">Please enter a location.</p>';
    }
    });