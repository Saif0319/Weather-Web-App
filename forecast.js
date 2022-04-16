const key = "Qq5P7HwCXrdnyQ9Wqv4FWatKCVocRShW";

const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data[0]);
};

getCity("toronto")
.then(data => console.log(data))
.catch(error => console.log(error));

  