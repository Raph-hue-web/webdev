console.log('I love API')

let names = document.createElement('h1');
let app = document.getElementById('app');
let list = document.getElementById('list');

/*fetch ('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
.then(data => {
    for(let i=0; i < 10; i++) {
        let item = document.createElement('li')
        item.innerHTML = data.results[i].name
        list.appendChild(item)
    
    }
})
 .catch(error => console.log (error))*/


fetch('https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=592accfb9bf63e2608a90c7c52321a31')
    .then(response => response.json())
     .then(data =>{console.log(data)})

     



