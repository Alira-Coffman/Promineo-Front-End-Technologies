var points = 0; 
var pointsReset = false;

for(var i = 0; i<= 100; i++)
{   if(points === 125) points=25;
    else if(i%2===0) points+=5; else points+=3;
   
    console.log('Turns: ' + i + 'Points: ' + points);
    if(points > 290) break;
}

// for(var i = 0; i <=100; i++)
// {
   
//    if(i%2 === 0)
//     {
//         points += 5;
//     }
//     else
//     {
//         points += 3;
//     }
//     if(points === 125)
//     {
//         points = 25;
//     }
    
//     console.log('Turns: ' + i + ' Points: ' + points);
//     if(points > 290) break;
// }