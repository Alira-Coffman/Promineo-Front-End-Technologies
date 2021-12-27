// let a = 5;
// let b = 8;
// var username = "student";

// while(username != "student" )
// {
    
//     username = prompt("what is your name?");
//     console.log(username);
// }


//Printing with a for loop


// //loop till 100, by 1's
// for(let x = 1; x <=100; x ++)
// {
//     //if even
//     if(x % 2 == 0)
//     {
//         //print iteration count and foo
//         console.log(x + " foo");
//     }
   
// }


// for(let x = 6; x <=50 && x > 5; x= x +2)
// {
//     console.log(x);
    
//     //x +=2
// } 


let rain = true;

if(rain)
{
    console.log("I need to bring an umbrella");
}
else
{
    console.log("no need to bring an umbrella");
}


let trafficLight = "green";


if(trafficLight == "green" )
{
    console.log("go");
}
else if(trafficLight == "yellow")
{
    console.log("slow");
}
else if(trafficLight == "red")
{
    console.log("stop");
}
else 
{
    console.log("your traffic light is broken")
}


let x = 7;
//check if greater than zero
if(x >0)
{
    if(x % 2 == 0)
    {
        console.log("I am even");
    }
    else
    {
        console.log("I am odd");
    }
       
}
else if(x <0)
{
    console.log("negative");
}
else
{
    console.log("neutral");
}

let dayOfTheWeek = "Tuesday";
var d = new Date();
var n = d.getDay();
console.log(n);
switch(n)
{
    case "Monday":
        console.log("monday");
        break;
    case "Tuesday":
        console.log("tues");
        break;
    case "Wednesday":
        console.log("w");
        break;
    case "Thursday" :
        console.log("t");
        break;
    case "Friday" :
        console.log("Fr");
        break;
    case "Saturday":
        console.log("Sa");
        break;
    case "Sunday":
        console.log("Su");
        break;
    default:
        console.log("You must be not on earth");
        break;
}