const weather_api = "http://api.openweathermap.org/data/2.5/weather?q=Honolulu,us&APPID=252b754e8cc7d6011a4648033e72ce32"
window.addEventListener("load", function() {

  });

function getWeatherData() {
  const data = JSON.parse(this.responseText);
  console.dir(data);
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;
  console.log(sunset);
}

const weatherConnect = new XMLHttpRequest();

weatherConnect.addEventListener("load", getWeatherData);

weatherConnect.open("GET", weather_api)
weatherConnect.send();
