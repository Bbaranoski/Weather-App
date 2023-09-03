import './style.css'

let local = 'london'

async function weather() {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=b3f95362dd9b4e10a9b180955230309&q=" + `${local}` + "&aqi=no", {mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData.current.temp_c)
}

weather()