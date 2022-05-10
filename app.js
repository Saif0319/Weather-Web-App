const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();



// DOM
const updateUI = (data) => {
    const cityDets = data.cityDet;
    const weather = data.weather;


    // Update details template
    details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
            <h5 class="my-3 ">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${Math.round(weather.Temperature.Metric.Value)}</span>
                <span style="margin: -15px">&deg;C</span>
            </div>
        </div>`

        
    // Update the day/night & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute("src", iconSrc);
    let timeSrc = null;

    if (weather.IsDayTime){
        timeSrc = "img/day.svg";
    } else {
        timeSrc = "img/night.svg";
    }

    time.setAttribute("src",timeSrc);




    if (card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }
}
























cityForm.addEventListener("submit", e => {

    e.preventDefault();

    // Get city name
    const city = cityForm.city.value.trim()
    cityForm.reset();


    // Update the UI with new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error))

    // Set local storage
    localStorage.setItem("city", city)

})

if (localStorage.getItem("city")){

    forecast.updateCity(localStorage.getItem("city"))
    .then(data => updateUI(data))
    .catch(error => console.log(error))      
}


