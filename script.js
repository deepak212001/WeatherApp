function getWeather() {
    var city = document.getElementById("city").value;

    var apiKey = '20fe36499d77260064a6e44b8aed3e82';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var weatherResult = document.getElementById("weather-result");
            console.log(city);
          
            weatherResult.innerHTML = `<img src="https://www.transparentpng.com/thumb/temperature/sunset-temperature-icon-png-12.png" width="25" height="20"> &nbsp; Temperature: ${data.main.temp}°C <br>
            <img src="img/cloud.png" width="20" height="20"> &nbsp; Description: ${data.weather[0].main} <br>
            <i class='bx bx-wind'></i> <img src="img/wind.png"> Wind: ${data.wind.speed}m/sec <br>
            <img src="img/hum.png" width="30" height="30"> &nbsp;Humidity: ${data.main.humidity}%     &nbsp;&nbsp;
            <br> <img src="img/pre.png" width="30" height="30"> &nbsp;Pressure: ${data.main.pressure}hPa <br>`;
          
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            var weatherResult = document.getElementById("weather-result");
            weatherResult.textContent = " Error fetching weather data. Please try again.";
            let myImage = document.getElementById("myImage");
            myImage.setAttribute("src", "/img/error.jpg");
        });
}
