
const apiKey = "13b66b533c7fa83b7641ebd84fb790af";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-description").innerHTML = data.weather[0].description;

        let weatherCondition = data.weather[0].main


        document.querySelector(".weather-icon").setAttribute("src", `./images/${weatherCondition.toLowerCase()}.png`);

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";

    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
