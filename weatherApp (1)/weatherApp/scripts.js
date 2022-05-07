let search = document.getElementById('search')
let btn = document.getElementById('btn')


btn.onclick = function (){
    let value = search.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d24754b8c30e5c609dc65e0c01db6f7d&units=metric`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        let locations = document.getElementById('location')
        let description = document.getElementById('description')
        let temperature = document.getElementById('temperature')
        let feels = document.getElementById('feels')
        locations.innerHTML = data.name
        description.innerHTML = data.weather[0].description
        temperature.innerHTML = data.main.temp
        feels.innerHTML = data.main.feels_like
    })
    
}

