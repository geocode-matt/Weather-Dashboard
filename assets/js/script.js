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
var searchesContainerEl = document.querySelector("#search-list");
var searchedItemsClick = document.querySelector("#search-list")

////
// FUNCTIONS
////


// Function to fetch the daily weather API
function getDailyWeather(city) {
    var apiDaily = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=fb1408fe157a1fe32343a24d25e5ebaf";
    // make a request to the url
    fetch(apiDaily).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        dailyCity = data.name;
        dailyHumidity = Math.floor(data.main.humidity);
        dailyTemp = Math.floor(data.main.temp);
        dailyWindSpeed = Math.floor(data.wind.speed);
        // dailyUvIndex = data.
        displaySearches();
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

  // Function to fetch the 5 day weather API
function getFiveDayWeather(city) {
  var apiFiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=fb1408fe157a1fe32343a24d25e5ebaf";
  // make a request to the url
  fetch(apiFiveDayForecast).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      dataArr = data.list;
      var dataArrSliced = dataArr.slice(0, 5);
      console.log(dataArrSliced);

      var dayOneDate = moment(now, "M/DD/YYYY").add(1, 'd').format("M/DD/YYYY");
      var dayOneIcon = dataArrSliced[0].weather[0].icon
      var dayOneTemp = Math.floor(dataArrSliced[0].main.temp)
      var dayOneHum = Math.floor(dataArrSliced[0].main.humidity)
      console.log(dayOneDate);
      console.log(dayOneIcon);
      console.log(dayOneTemp);
      console.log(dayOneHum);

      var icon = document.createElement("img");


      // dailyCity = data.name;
      // dailyHumidity = Math.floor(data.main.humidity);
      // dailyTemp = Math.floor(data.main.temp);
      // dailyWindSpeed = Math.floor(data.wind.speed);
      // console.log(dailyCity);
      // console.log(dailyTemp);
      // console.log(dailyWindSpeed);
      // dailyUvIndex = data.
    //   displaySearches();
    // var cityDate = document.createElement("li");
    // cityDate.textContent = dailyCity + " (" + now + ")";
    // cityDate.setAttribute("style", "list-style: none; font-size: 28px;");
    // dailyList.appendChild(cityDate);

    // var cityTemp = document.createElement("li");
    // cityTemp.textContent = "Temperature:" + " " + dailyTemp + '­­°';
    // cityTemp.setAttribute("style", "list-style: none;");
    // dailyList.appendChild(cityTemp);

    // var cityHum = document.createElement("li");
    // cityHum.textContent = "Humidity:" + " " + dailyHumidity + '­­%';
    // cityHum.setAttribute("style", "list-style: none;");
    // dailyList.appendChild(cityHum);

    // var cityWs = document.createElement("li");
    // cityWs.textContent = "Wind Speed:" + " " + dailyWindSpeed + '­­ MPH';
    // cityWs.setAttribute("style", "list-style: none;");
    // dailyList.appendChild(cityWs);
    });
  });
};
  

////
// Function to grab input city and run the getWeather function
////
var formSubmitHandler = function(event) {
event.preventDefault();
// cardDivEl.innerHTML = "";
// get value from input element
var city = cityInputEl.value.trim();

if (city) {
  getDailyWeather(city);
  getFiveDayWeather(city);
//   cityInputEl.value = "";
  // displayDaily();
} else {
  alert("Please enter a valid city name!");
}
    // console.log(event);
    // console.log(city);
};

var clearDiv = function() {
  if (cardDivEl.textContent = "") {
    return
  } else {
    cardDivEl.textContent = "";
  }
}

// function to display searched items on left-hand side list
var displaySearches = function() {
// create a container for each repo
// create a link for each repo
var listItemEl = document.createElement("button");
listItemEl.classList = "list-group-item list-group-item-action";
// listItemEl.setAttribute("style", "type: button; width: 100%;")
// listEl.setAttribute("style", "display: flex; padding: 0 0 0 0;")
listItemEl.textContent = city.value;
searchesContainerEl.appendChild(listItemEl);

// searchItemEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
// create a span element to hold repository name

// var titleEl = document.createElement("span");
// titleEl.textContent = city.value;




// append to container
// searchItemEl.appendChild(titleEl);
// append container to the dom
// searchesContainerEl.appendChild(searchItemEl);
}




////
// event listeners
////
cityFormEl.addEventListener("submit", formSubmitHandler);
searchedItemsClick.addEventListener("click", formSubmitHandler);