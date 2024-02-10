let searchInput =  document.querySelector("#searchInput")
let submit =  document.querySelector("#submit")
let img =  document.querySelector(".img")
let deg =  document.querySelector("#deg")
let humidityval =  document.querySelector("#humidityval")
let windval =  document.querySelector("#windval")

const apikey = "65e31055b8fff48d54e396aaacc35b48"
const apiUrI ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function weatherchange(city) {
    const res = await fetch(apiUrI + city + `&appid=${apikey}`);
    const data = await res.json()
    console.log(data)

    deg.innerHTML = `${Math.round(data.main.temp)} °C`
    document.querySelector("#city").innerHTML = `${data.name}`
    humidityval.innerHTML = `${data.main.humidity}%`
    windval.innerHTML = `${data.wind.speed}Km/h`

    if (data.weather[0].main == 'Clear') {
        img.src =  './images/clear.png'
        } else if (data.weather[0].main == 'Clouds') {
            img.src =  './images/clouds.png'
        }else if (data.weather[0].main == 'Rain') {
            img.src =  './images/rain.png'
        }else if (data.weather[0].main == 'Snow') {
            img.src =  './images/snow.png'
        }else if (data.weather[0].main == 'Rain') {
            img.src =  './images/rain.png'
        }else if (data.weather[0].main == 'Drizzle') {
            img.src =  './images/drizzle.png'
        }else{
            img.src =  './images/mist.png'
        }
    }



submit.addEventListener( 'click', ()=>{
    weatherchange(searchInput.value)

})

