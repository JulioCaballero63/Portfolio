function weather() {
    let city = document.getElementById("city").value;
    console.log(city);

    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=bb328ca5ed25ab2e54b32f4fee76885b&units=imperial`;
    fetch(api)
        .then((result) => result.json())
        .then((object) => {
            console.log(object);
            let lat = object.city.coord.lat;
            console.log(lat);

            let lon = object.city.coord.lon;
            console.log(lon);

            let name = object.city.name;
            console.log(name);
            document.querySelector('#name').innerHTML = `${name} Weather`;

            const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=bb328ca5ed25ab2e54b32f4fee76885b&units=imperial`;
            fetch(apiURL)
                .then((response) => response.json())
                .then((jsObject) => {
                    // console.log(jsObject);
                    document.querySelector("#currently").innerHTML =
                        jsObject.current.weather[0].description;
                    document.querySelector("#temp").innerHTML = Math.round(
                        jsObject.current.temp
                    );
                    document.querySelector("#humidity").innerHTML = jsObject.current.humidity;


                    // forecast
                    const dayone = Math.round(jsObject.daily[0].temp.day);
                    document.querySelector("#forecast1").innerHTML = dayone;

                    let iconone = `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
                    document.querySelector("#image1").setAttribute("src", iconone);
                    document.querySelector("#image1").setAttribute("alt", "iconone");

                    const daytwo = Math.round(jsObject.daily[1].temp.day);
                    document.querySelector("#forecast2").innerHTML = daytwo;

                    let icontwo = `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
                    document.querySelector("#image2").setAttribute("src", icontwo);
                    document.querySelector("#image2").setAttribute("alt", "icontwo");

                    const daythree = Math.round(jsObject.daily[2].temp.day);
                    document.querySelector("#forecast3").innerHTML = daythree;

                    let iconthree = `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
                    document.querySelector("#image3").setAttribute("src", iconthree);
                    document.querySelector("#image3").setAttribute("alt", "iconthree");
                });
        });
};
