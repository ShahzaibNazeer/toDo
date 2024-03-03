let addButton = document.getElementById('toDoButton');
let inputs = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');

addButton.addEventListener('click', function () {
    if (inputs.value === "") {
        alert("You Can Not Pass A Empty To Do ")
    } else {

        let list = document.createElement('p')
        list.innerText = inputs.value;
        toDoContainer.appendChild(list)
        inputs.value = ""

        // list.classList.add('');

        list.addEventListener('click', function () {
            list.style.textDecoration = 'line-through'
        })
        list.addEventListener('dblclick', function () {
            toDoContainer.removeChild(list)
        })
    }
})
