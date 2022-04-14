let div = document.getElementById('entry1');
div.style.backgroundColor = 'green';


function changeColor()
{
    div.classList.toggle('text-red');
    let para = document.createElement('p');
    let textNode = document.createTextNode('Hello World');
    console.log(para);
    console.log(textNode);

    para.appendChild(textNode);
    console.log(para);
    div.appendChild(para);



}

function removeMe()
{
    
   div.removeChild(div.lastChild);
   console.log(div.lastChild);
}

function removeAllChildren()
{
    while(div.lastChild != null)
        document.getElementById('entry1').removeChild(div.lastChild);
}