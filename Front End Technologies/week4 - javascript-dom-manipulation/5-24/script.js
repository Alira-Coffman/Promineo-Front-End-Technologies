let divEntry = document.getElementById('entry1');
console.log(divEntry)
divEntry.style.background = 'blue'

divEntry.classList.add('large')

let allClass = document.getElementsByClassName('class')[0];

allClass.style.background = 'green'
console.log(allClass[0]);

let nameElement = document.getElementsByName('colorpicker');
console.log(nameElement)

let tag = document.getElementsByTagName('input');
console.log(tag)

let entry2 = document.getElementById('entry2');
entry2.textContent = 'Hello World'