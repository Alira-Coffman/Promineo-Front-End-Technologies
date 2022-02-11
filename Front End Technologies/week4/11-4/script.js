console.log(document.getElementById('paragraph'));
console.log(document.getElementsByClassName('lists'));
console.log(document.getElementsByName('fname'));
console.log(document.getElementsByName('phone'));
console.log(document.getElementsByTagName('div'));
console.log(document.querySelector('#fname-input'));
let myParagraph = document.getElementById('paragraph');
function changeColor(newColor)
{
    myParagraph.style.color = newColor;
    console.log('Clicked')
}

let listsClass = document.getElementsByClassName('lists');

listsClass[0].style.color = 'blue';
listsClass[1].style.color ='green';
listsClass[0].classList.add('myClass')

let inputPhone = document.getElementsByName('phone');
inputPhone[0].style.border = "thick solid #0000FF";

let inputName = document.getElementsByName('fname');
inputName[0].style.border = "thick solid #ffe4c4";

let divCollection = document.getElementsByTagName('div');
divCollection[0].style.backgroundColor = 'pink';

// myParagraph.classList.remove('paragraph');


function changeBackgroundColor()
{
    listsClass[1].classList.toggle('myClass');
    var li = document.createElement('li');
    //var li_text = document.createTextNode("new List item");
    var li_text = li.textContent = 'new List Item'
   // li.appendChild(li_text);
    listsClass[1].appendChild(li);

}
function removeNode()
{
    listsClass[0].firstChild.remove()
}