let listContainer = document.getElementById('list');
let para = document.getElementById('para');


//add event listener to para
para.addEventListener('click', function(){
    alert('Clicked');
})

//create element to add
let listElement = document.createElement('li');
listElement.innerHTML = 'Added Node'; //createTextNode, appendTextNode to listElement


//mainpulate listElement. Text blue
listElement.style.color ='blue';

//add classes to elements
listElement.classList.add('fs-5');

//append element to parent
listContainer.appendChild(listElement);



