const cityForm = document.querySelector("form");

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
    .then(data => console.log(data))
    .catch(error => console.log(error))

})


