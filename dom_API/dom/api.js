

let names = document.createElement('h1');
let app = document.getElementById('app');
let list = document.getElementById('list');

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data.results)
//         for(let i=0;i < 10; i++){
//             let item = document.createElement('li')
//             item.innerHTML = data.results[i].name
//             list.appendChild(item)
//         }
//     })
//     .catch(error => console.log(error))


fetch('https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=d24754b8c30e5c609dc65e0c01db6f7d&units=metric')
    .then(response => response.json())
    .then(data =>{console.log(data)})