

let btn = document.getElementById('btn')
let list = document.getElementById('list')
let form = document.getElementById('form')


// function to add item
btn.onclick = function(){
    let value = form.value
    let item = document.createElement('li')
    let del = document.createElement('button')
    let edit = document.createElement('button')
    item.setAttribute('id', value)

    del.innerHTML = 'delete'
    edit.innerHTML = 'edit'
    item.innerHTML = value
    
    list.append(item)
    item.appendChild(del)
    item.appendChild(edit)
    form.value = " "

    //function to delete item
    del.onclick = function(){
        list.removeChild(item)
    }

    edit.onclick = function(){
        //function to get item to edit

        form.value = item.id
        btn.innerHTML = 'edit'
        btn.setAttribute('id', 'edit')
        let edits = document.getElementById('edit')
        //function to edit item
        edits.onclick = function(){
        let newItem = document.createElement('li')
        newItem.innerHTML = form.value
        
        let items = document.getElementById(item.id)
        list.replaceChild(newItem, items)
        newItem.appendChild(del)
        newItem.appendChild(edit)
        btn.innerHTML = 'Add'
        btn.setAttribute('id', 'btn')
        }


}
}

