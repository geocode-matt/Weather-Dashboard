var cityFormEl = document.querySelector("#user-form-btn");
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
var fiveDayCard = document.querySelector(".day-one-card")

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
        $(dailyList).empty()
        
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

// Function to fetch the daily weather API upon clicking on searched item
function getDailyWeatherSearched(city) {
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
      $(dailyList).empty()
      
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
      // console.log(data);
      dataArr = data.list;
      var dataArrSliced = dataArr.slice(0, 5);
      console.log(dataArrSliced);

      var dayOneDate = moment(now, "M/DD/YYYY").add(1, 'd').format("M/DD/YYYY");
      var dayOneIcon = dataArrSliced[0].weather[0].icon
      var dayOneTemp = Math.floor(dataArrSliced[0].main.temp)
      var dayOneHum = Math.floor(dataArrSliced[0].main.humidity)
      
      var dayTwoDate = moment(now, "M/DD/YYYY").add(2, 'd').format("M/DD/YYYY");
      var dayTwoIcon = dataArrSliced[1].weather[0].icon
      var dayTwoTemp = Math.floor(dataArrSliced[1].main.temp)
      var dayTwoHum = Math.floor(dataArrSliced[1].main.humidity)

      var dayThreeDate = moment(now, "M/DD/YYYY").add(3, 'd').format("M/DD/YYYY");
      var dayThreeIcon = dataArrSliced[2].weather[0].icon
      var dayThreeTemp = Math.floor(dataArrSliced[2].main.temp)
      var dayThreeHum = Math.floor(dataArrSliced[2].main.humidity)

      var dayFourDate = moment(now, "M/DD/YYYY").add(4, 'd').format("M/DD/YYYY");
      var dayFourIcon = dataArrSliced[3].weather[0].icon
      var dayFourTemp = Math.floor(dataArrSliced[3].main.temp)
      var dayFourHum = Math.floor(dataArrSliced[3].main.humidity)

      var dayFiveDate = moment(now, "M/DD/YYYY").add(5, 'd').format("M/DD/YYYY");
      var dayFiveIcon = dataArrSliced[4].weather[0].icon
      var dayFiveTemp = Math.floor(dataArrSliced[4].main.temp)
      var dayFiveHum = Math.floor(dataArrSliced[4].main.humidity)

    // variable and element creation for 5 day forecast list items
      // day 1
      var dayOneDateLi = document.createElement("li");
      dayOneDateLi.innerHTML = dayOneDate;
      dayOneDateLi.setAttribute("style", "list-style: none; font-size: 20px;");
      dayOneDateLi.classList = "card-title";
      
      var dayOneIconLi = document.createElement("img");
      dayOneIconLi.setAttribute("style", "list-style: none;");
      dayOneIconLi.setAttribute("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png")
      dayOneIconLi.classList = "card-text";

      var dayOneTempLi = document.createElement("li");
      dayOneTempLi.innerHTML = "Temp:" + " " + dayOneTemp + '­­°';
      dayOneTempLi.setAttribute("style", "list-style: none;");
      dayOneTempLi.classList = "card-text";

      var dayOneHumLi = document.createElement("li");
      dayOneHumLi.innerHTML = "Humidity:" + " " + dayOneHum + '­­%';
      dayOneHumLi.setAttribute("style", "list-style: none;");
      dayOneHumLi.classList = "card-text";

      // day 2
      var dayTwoDateLi = document.createElement("li");
      dayTwoDateLi.innerHTML = dayTwoDate;
      dayTwoDateLi.setAttribute("style", "list-style: none; font-size: 20px;");
      dayTwoDateLi.classList = "card-title";

      var dayTwoIconLi = document.createElement("img");
      dayTwoIconLi.setAttribute("style", "list-style: none;");
      dayTwoIconLi.setAttribute("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png")
      dayTwoIconLi.classList = "card-text";
      
      var dayTwoTempLi = document.createElement("li");
      dayTwoTempLi.innerHTML = "Temp:" + " " + dayTwoTemp + '­­°';
      dayTwoTempLi.setAttribute("style", "list-style: none;");
      dayTwoTempLi.classList = "card-text";

      var dayTwoHumLi = document.createElement("li");
      dayTwoHumLi.innerHTML = "Humidity:" + " " + dayTwoHum + '­­%';
      dayTwoHumLi.setAttribute("style", "list-style: none;");
      dayTwoHumLi.classList = "card-text";

      // day 3
      var dayThreeDateLi = document.createElement("li");
      dayThreeDateLi.innerHTML = dayThreeDate;
      dayThreeDateLi.setAttribute("style", "list-style: none; font-size: 20px;");
      dayThreeDateLi.classList = "card-title";

      var dayThreeIconLi = document.createElement("img");
      dayThreeIconLi.setAttribute("style", "list-style: none;");
      dayThreeIconLi.setAttribute("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png")
      dayThreeIconLi.classList = "card-text";
      
      var dayThreeTempLi = document.createElement("li");
      dayThreeTempLi.innerHTML = "Temp:" + " " + dayThreeTemp + '­­°';
      dayThreeTempLi.setAttribute("style", "list-style: none;");
      dayThreeTempLi.classList = "card-text";

      var dayThreeHumLi = document.createElement("li");
      dayThreeHumLi.innerHTML = "Humidity:" + " " + dayThreeHum + '­­%';
      dayThreeHumLi.setAttribute("style", "list-style: none;");
      dayThreeHumLi.classList = "card-text";

      // day 4
      var dayFourDateLi = document.createElement("li");
      dayFourDateLi.innerHTML = dayFourDate;
      dayFourDateLi.setAttribute("style", "list-style: none; font-size: 20px;");
      dayFourDateLi.classList = "card-title";

      var dayFourIconLi = document.createElement("img");
      dayFourIconLi.setAttribute("style", "list-style: none;");
      dayFourIconLi.setAttribute("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png")
      dayFourIconLi.classList = "card-text";
      
      var dayFourTempLi = document.createElement("li");
      dayFourTempLi.innerHTML = "Temp:" + " " + dayFourTemp + '­­°';
      dayFourTempLi.setAttribute("style", "list-style: none;");
      dayFourTempLi.classList = "card-text";

      var dayFourHumLi = document.createElement("li");
      dayFourHumLi.innerHTML = "Humidity:" + " " + dayFourHum + '­­%';
      dayFourHumLi.setAttribute("style", "list-style: none;");
      dayFourHumLi.classList = "card-text";

      // day 5
      var dayFiveDateLi = document.createElement("li");
      dayFiveDateLi.innerHTML = dayFiveDate;
      dayFiveDateLi.setAttribute("style", "list-style: none; font-size: 20px;");
      dayFiveDateLi.classList = "card-title";

      var dayFiveIconLi = document.createElement("img");
      dayFiveIconLi.setAttribute("style", "list-style: none;");
      dayFiveIconLi.setAttribute("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png")
      dayFiveIconLi.classList = "card-text";
      
      var dayFiveTempLi = document.createElement("li");
      dayFiveTempLi.innerHTML = "Temp:" + " " + dayFiveTemp + '­­°';
      dayFiveTempLi.setAttribute("style", "list-style: none;");
      dayFiveTempLi.classList = "card-text";

      var dayFiveHumLi = document.createElement("li");
      dayFiveHumLi.innerHTML = "Humidity:" + " " + dayFiveHum + '­­%';
      dayFiveHumLi.setAttribute("style", "list-style: none;");
      dayFiveHumLi.classList = "card-text";

    // create all div elements day 1
      var dayOne1 = document.createElement("div");
      dayOne1.classList = "card-body";
      var dayOne2 = document.createElement("div");
      dayOne2.classList = "card text-white bg-primary mb-3 individual-card";
      dayOne3 = document.createElement("div");
      dayOne3.classList = "card-body";
      // create all div elements day 2
      var dayTwo1 = document.createElement("div");
      dayTwo1.classList = "card-body";
      var dayTwo2 = document.createElement("div");
      dayTwo2.classList = "card text-white bg-primary mb-3 individual-card";
      dayTwo3 = document.createElement("div");
      dayTwo3.classList = "card-body";
      // create all div elements day 3
      var dayThree1 = document.createElement("div");
      dayThree1.classList = "card-body";
      var dayThree2 = document.createElement("div");
      dayThree2.classList = "card text-white bg-primary mb-3 individual-card";
      dayThree3 = document.createElement("div");
      dayThree3.classList = "card-body";
      // create all div elements day 4
      var dayFour1 = document.createElement("div");
      dayFour1.classList = "card-body";
      var dayFour2 = document.createElement("div");
      dayFour2.classList = "card text-white bg-primary mb-3 individual-card";
      dayFour3 = document.createElement("div");
      dayFour3.classList = "card-body";
      // create all div elements day 5
      var dayFive1 = document.createElement("div");
      dayFive1.classList = "card-body";
      var dayFive2 = document.createElement("div");
      dayFive2.classList = "card text-white bg-primary mb-3 individual-card";
      dayFive3 = document.createElement("div");
      dayFive3.classList = "card-body";
      
    // append all of them into card form day 1
      dayOne3.appendChild(dayOneDateLi);
      dayOne3.appendChild(dayOneIconLi);
      dayOne3.appendChild(dayOneTempLi);
      dayOne3.appendChild(dayOneHumLi);
      dayOne2.appendChild(dayOne3);
      dayOne1.appendChild(dayOne2);
      fiveDayCard.appendChild(dayOne1);
      // append all of them into card form day 2
      dayTwo3.appendChild(dayTwoDateLi);
      dayTwo3.appendChild(dayTwoIconLi);
      dayTwo3.appendChild(dayTwoTempLi);
      dayTwo3.appendChild(dayTwoHumLi);
      dayTwo2.appendChild(dayTwo3);
      dayTwo1.appendChild(dayTwo2);
      fiveDayCard.appendChild(dayTwo1);
      // append all of them into card form day 3
      dayThree3.appendChild(dayThreeDateLi);
      dayThree3.appendChild(dayThreeIconLi);
      dayThree3.appendChild(dayThreeTempLi);
      dayThree3.appendChild(dayThreeHumLi);
      dayThree2.appendChild(dayThree3);
      dayThree1.appendChild(dayThree2);
      fiveDayCard.appendChild(dayThree1);
      // append all of them into card form day 4
      dayFour3.appendChild(dayFourDateLi);
      dayFour3.appendChild(dayFourIconLi);
      dayFour3.appendChild(dayFourTempLi);
      dayFour3.appendChild(dayFourHumLi);
      dayFour2.appendChild(dayFour3);
      dayFour1.appendChild(dayFour2);
      fiveDayCard.appendChild(dayFour1);
      // append all of them into card form day 5
      dayFive3.appendChild(dayFiveDateLi);
      dayFive3.appendChild(dayFiveIconLi);
      dayFive3.appendChild(dayFiveTempLi);
      dayFive3.appendChild(dayFiveHumLi);
      dayFive2.appendChild(dayFive3);
      dayFive1.appendChild(dayFive2);
      fiveDayCard.appendChild(dayFive1);
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
  getDailyWeather(city);
  getFiveDayWeather(city);
} else {
  alert("Please enter a valid city name!");
}
};

// var clearDiv = function() {
//   if (cardDivEl.textContent = "") {
//     return
//   } else {
//     $(dailyList).empty()
//   }
// }

// function to display searched items on left-hand side list
var displaySearches = function() {
    var listItemEl = document.createElement("button");
    listItemEl.classList = "list-group-item list-group-item-action";
    listItemEl.textContent = city.value;
    searchesContainerEl.appendChild(listItemEl);
}




////
// event listeners
////
cityFormEl.addEventListener("click", formSubmitHandler);
searchedItemsClick.addEventListener("click", function(event) {
  event.preventDefault();
  var city = event.target.textContent;
  getDailyWeatherSearched(city);
  // getFiveDayWeather(city);
});