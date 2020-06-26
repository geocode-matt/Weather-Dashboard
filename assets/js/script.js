var cityFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var dailyList = document.querySelector(".dynamicList");
var cardDivEl = document.getElementById("daily-card");
var now = moment().format("M/DD/YYYY");
var dailyCity;
var dailyHumidity;
var dailyTemp;
var dailyWindSpeed;
var dailyUvIndex;

////
// FUNCTIONS
////

// Async function
// async function getWeather() {
//   var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fb1408fe157a1fe32343a24d25e5ebaf";
//   let response = await fetch(apiUrl);
// }

// getWeather().then(function(response) {
//   response.json().then(function(data) {
//     console.log(data);
//     dailyCity = data.name;
//     dailyTemp = data.main.temp;
//     dailyWindSpeed = data.wind.speed;
//     console.log(dailyCity);
//     console.log(dailyTemp);
//     console.log(dailyWindSpeed);
//   });
// });

// Function to fetch the daily weather API
function getWeather(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=fb1408fe157a1fe32343a24d25e5ebaf";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        dailyCity = data.name;
        dailyHumidity = Math.floor(data.main.humidity);
        dailyTemp = Math.floor(data.main.temp);
        dailyWindSpeed = Math.floor(data.wind.speed);
        console.log(dailyCity);
        console.log(dailyTemp);
        console.log(dailyWindSpeed);
        // dailyUvIndex = data.

      var cityDate = document.createElement("li");
      cityDate.textContent = dailyCity + " (" + now + ")";
      cityDate.setAttribute("style", "list-style: none; font-size: 28px;");
      dailyList.appendChild(cityDate);

      var cityTemp = document.createElement("li");
      cityTemp.textContent = "Temperature:" + " " + dailyTemp + '­­°';
      cityTemp.setAttribute("style", "list-style: none;");
      dailyList.appendChild(cityTemp);

      var cityHum = document.createElement("li");
      cityHum.textContent = "Humidity:" + " " + dailyHumidity + '­­%';
      cityHum.setAttribute("style", "list-style: none;");
      dailyList.appendChild(cityHum);

      var cityWs = document.createElement("li");
      cityWs.textContent = "Wind Speed:" + " " + dailyWindSpeed + '­­ MPH';
      cityWs.setAttribute("style", "list-style: none;");
      dailyList.appendChild(cityWs);
      });
    });
  };
// console.log(dailyCity);
// console.log(dailyTemp);
// console.log(dailyWindSpeed);
// console.log(weatherData.id);

////
// Function to grab input city and run the getWeather function
////
var formSubmitHandler = function(event) {
event.preventDefault();
// cardDivEl.innerHTML = "";
// get value from input element
var city = cityInputEl.value.trim();

if (city) {
  getWeather(city);
//   cityInputEl.value = "";
  // displayDaily();
} else {
  alert("Please enter a valid city name!");
}
    // console.log(event);
    // console.log(city);
};

var clearDiv = function() {
  $(".cardDivEl").remove();
}

// Display daily weather
// var displayDaily = function() {
//   var cityDate = document.createElement("li");
  // Force first letter upper case
  // var cityString = city.value;
  // cityDate.innerHTML = cityString[0].toUpperCase() + cityString.slice(1) + " (" + now + ")";
  // cityDate.textContent = dailyCity;
  // dailyList.appendChild(cityDate);
  // console.log(dailyCity);
// }




////
// event listeners
////
cityFormEl.addEventListener("submit", formSubmitHandler);