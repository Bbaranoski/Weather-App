import "./style.css";
import { domData } from "./dom.js";

let local = "london";

async function weather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=b3f95362dd9b4e10a9b180955230309&q=" +
      `${local}` +
      "&aqi=no",
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  const c = weatherData.current.temp_c;
  const f = weatherData.current.temp_f;
  const feelsC = weatherData.current.feelslike_c;
  const feelsF = weatherData.current.feelslike_f;
  const humidity = weatherData.current.humidity;
  const name = weatherData.location.name;
  const data = new weatherObj(c, f, feelsC, feelsF, humidity, name);
  domData(data);
}

weather();

const input = document.getElementById("local");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  local = input.value;
  input.value = "";
  weather();
});

function weatherObj(c, f, feelsC, feelsF, humidity, name) {
  this.c = c;
  this.f = f;
  this.feelsC = feelsC;
  this.feelsF = feelsF;
  this.humidity = humidity;
  this.name = name;
}
