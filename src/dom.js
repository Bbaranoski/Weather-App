let type = "celsius";
let data = "";

const body = document.body;
const name = document.createElement('h1');
body.appendChild(name)
const temp = document.createElement("h1");
body.appendChild(temp);
const feels = document.createElement("h2");
body.appendChild(feels);
const humidity = document.createElement("p");
body.appendChild(humidity);

export function domData(obj) {
  name.textContent = obj.name  
  if (type == "celsius") {
    temp.textContent = 'Temperature: ' + obj.c + "c";
    feels.textContent = 'Feels Like: ' + obj.feelsC + "c";
  } else if (type == "fire") {
    temp.textContent = 'Temperature: ' + obj.f + "f";
    feels.textContent = 'Feels Like: ' + obj.feelsF + "f";
  }
  humidity.textContent = 'Humidity: ' + obj.humidity;
  return (data = obj);
}

const button = document.createElement("button");
button.textContent = "Temperature Type";
body.appendChild(button);
button.addEventListener("click", () => {
  if (type == "celsius") {
    type = "fire";
  } else if (type == "fire") {
    type = "celsius";
  }
  domData(data);
});
