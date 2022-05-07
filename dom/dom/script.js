let parent = document.createElement('div')


let app = document.getElementById('app')

let child = document.createElement('h1')
child.innerHTML = 'i am a child element'
child.style.color = 'blue'
child.style.width = '250px'
child.style.height = '250px'
child.style.backgroundColor = 'grey'

let child2 = document.createElement('h2')
child2.innerHTML = 'i am a second child'

let child3 = document.createElement('h3')
child3.innerHTML = 'i am a third child'

parent.append(child, child2, child3)
// parent.appendChild(child2)
// parent.appendChild(child3)

// parent.removeChild(child)


app.appendChild(parent)

let btn = document.getElementById('btn')

btn.onclick = function () {
    btn.innerHTML = 'Clicked!' 
    child.style.backgroundColor = 'green'
}

child.onmouseover = function(){
    child.innerHTML = 'hovering'
    child.style.color = 'purple' ;
}