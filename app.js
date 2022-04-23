const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");


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

    if (card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }
}


const updateCity = async (city) => {
    
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);

    return {
        cityDet: cityDet,
        weather: weather
    }

}


cityForm.addEventListener("submit", e => {

    e.preventDefault();

    // Get city name
    const city = cityForm.city.value.trim()
    cityForm.reset();


    // Update the UI with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error))

})


