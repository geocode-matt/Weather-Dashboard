var cityFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var dailyList = document.querySelector(".dynamicList");



////
// FUNCTIONS
////


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

////
// Function to grab input city and run the getWeather function
////
var formSubmitHandler = function(event) {
event.preventDefault();

// get value from input element
var city = cityInputEl.value.trim();

if (city) {
  getWeather(city);
//   cityInputEl.value = "";
  displayDaily();
} else {
  alert("Please enter a valid city name!");
}
    console.log(event);
    console.log(city);
};


STUCK HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Display daily weather - STUCK HERE!!
var displayDaily = function() {
    if (dailyList.element === 0) {
        dailyList.remove();
    } else {
        var node1 = document.createElement("li");
        node1.textContent = city.value;
        dailyList.appendChild(node1);
    }
}




////
// event listeners
////
cityFormEl.addEventListener("submit", formSubmitHandler);