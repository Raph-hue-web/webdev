console.log("internal javascript");
//comment
/*line 1
| line2

*/

var name_ = "String"
console.log(name_)
let lname = "Raphael"
console.log(lname)
lname = 5
const fname = "zoro"
console.log(fname)
console.log(lname)
let array = [1, 3, "Joe", "Ama",2]
console.log(array)
console.log(array[2])

let add = 1 + 2
console.log("add: " + add)

let subtract = 10 - 5
console.log("subtract: " + subtract)

let multiply = 10 * 5
console.log ("multiply: " + multiply)

let division = 50/10
console.log(" division: " + division)

let modulo= 10 % 2
console.log("modulo: " + modulo)

let increment = 0
increment++
console.log("increment: " + increment)

increment--
console.log("decrement: " + increment)


let a = false 
let b = true

console.log("AND: " + (a && b))
console.log("OR: " + a || b)
console.log("NOT: " + !a)

let c = 10
c > 20 ? b : a
console.log(c > 20 ? b : a)

let array1 = ["ab", "Ama", "dog"]
console.log(array1)
array.pop()
console.log(array1)
array.push("bird")
console.log(array1)
array1.sort()
console.log(array1)
let fname1 = "Alex"
let array2 = fname1.split("")
console.log(array2)
array2.reverse()
console.log(array2)
let reverseName= array2.join("")
console.log(reverseName)
let array3 = array.slice(0,1)
console.log(array3)
array.map(function(item,index){
    console.log(index+" : "+item)
})

function check(names){
    return names == "Ama"
}

let array4= array.filter(check)
console.log(array4)

let parent = document.createElement('div')
parent.getComputedStyle.backgroundColor = 'pink'

let app = document.getElementById('app')

let child = document.createEElement('h1')
child.innerHTML = 'I am a child element'
child.style.color = 'blue'
child.style.color = '250px'
child.style.height = '250px'
child.style.backgroundColor = 'grey'



let child2 = document.createElement('h2')
child2.innerHTML = 'I am a second Child'

let child3 = document.createElement('h3')
child3.innerHTML = 'I am a third child'

parent.append(child, child2, child3)

parent.appendchild(child2)
parent.appendchild(child3)

parent.removeChild(child)

app.appendChild(parent)
console.log(parent)

app.appendChild(parent)

let btn = document.getElementById('btn')

btn.onclick = function () {
    child.innerHTML = 'hovering'
    child.style.color = 'purple' ;
}


let btn = document.getElementById('btn')
let list =document.getElementById('list')
Let form = document.getElementById('form')


btn.onclick = function() {
    let value = form.value
    let item = document.createElement('li')
    let del = document.createElement('button')
    let edit = document.createElement('button')
    del.setAttribute('id', value)

    del.innerHTML ='delete'
    item.innerHTML = value

    list.append(item)
    item.appendChild(del)
    item.appendChild(edit)
    form.value = ""

    del.onclick = function() {
        list.removeChild(item)
    }
}











