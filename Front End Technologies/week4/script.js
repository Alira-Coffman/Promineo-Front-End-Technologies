// document.getElementById("myHeader").style.background="red";
// let myBodyTag = document.getElementsByTagName("body");
// console.log(myBodyTag[0].classList);
// myBodyTag[0].classList.add('general');
// console.log(myBodyTag[0].classList);

// let headers = document.querySelectorAll('h1');
// for(let i = 0; i < headers.length; i++)
// {
//     headers[i].classList.add('border-styles');
// }

// for(let i = 0; i < headers.length; i++)
// {
//     headers[i].classList.remove('border-styles');
// }

document.getElementById("myBtn").addEventListener("click", toggleBorders);


function toggleBorders()
{
   

let myBodyTag = document.querySelector("body");
console.log(myBodyTag);
let newP = document.createElement("p");
newP.textContent = "test";
myBodyTag.appendChild(newP);

}


