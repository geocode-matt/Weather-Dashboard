var cityFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");


// var getWeather = function() {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=fb1408fe157a1fe32343a24d25e5ebaf").then(function(response) {
//         response.json().then(function(data) {
//           console.log(data);
//         });
//       });
// }


// Function to fetch the daily weather API
var getWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fb1408fe157a1fe32343a24d25e5ebaf";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

// Function to grab input city and run the getWeather function
var formSubmitHandler = function(event) {
event.preventDefault();

// get value from input element
var city = cityInputEl.value.trim();

if (city) {
  getWeather(city);
  cityInputEl.value = "";
} else {
  alert("Please enter a valid city name!");
}
    console.log(event);
};








// getWeather();



cityFormEl.addEventListener("submit", formSubmitHandler);