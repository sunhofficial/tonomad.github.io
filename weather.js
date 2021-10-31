const API_KEY = "55f655bf3b3194bfbb42d2e64f71fd09";
const city = document.querySelector(".weather span:first-child");
const weather = document.querySelector(".weather span:last-child");

function ongeek(positino) {
  const lat = positino.coords.latitude;
  const lon = positino.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `Main Spot ${data.name}`;
      weather.innerText = ` is ${data.weather[0].main}`;
    });
}
function onerror() {
  alert("Can't find you~!");
}

navigator.geolocation.getCurrentPosition(ongeek, onerror);
