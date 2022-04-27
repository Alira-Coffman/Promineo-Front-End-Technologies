$('#red-box').mousedown(
    () => {
        $('#red-box').css('box-shadow' , 'none');
    }
)

$('#red-box').mouseup(
    () => {
        $('#red-box').css('box-shadow' , 'inset 0px -8px 2px 0px #8d0101');
    }
)

$('#green-box').mousedown(
    () => {
        $('#green-box').css('box-shadow' , 'none');
    }
)

$('#green-box').mouseup(
    () => {
        $('#green-box').css('box-shadow' , 'inset 0px -8px 2px 0px #8d0101');
    }
)

$('#blue-box').mousedown(
    () => {
        $('#blue-box').css('box-shadow' , 'none');
    }
)

$('#blue-box').mouseup(
    () => {
        $('#blue-box').css('box-shadow' , 'inset 0px -8px 2px 0px #8d0101');
    }
)

$('#yellow-box').mousedown(
    () => {
        $('#yellow-box').css('box-shadow' , 'none');
    }
)

$('#yellow-box').mouseup(
    () => {
        $('#yellow-box').css('box-shadow' , 'inset 0px -8px 2px 0px #8d0101');
    }
)
$('.btn').click(() => { randomPattern()});

function randomPattern() 
{
    //only three colors to start 

    let pattern = []; 

    for(let i = 0; i < 4; i++)
    {
        let randomValue = Math.floor(Math.random() * 4);
        console.log(randomValue);
        pattern.push(randomValue);
    }
    startGame(pattern);
    //return pattern;
   
}

function startGame(pattern)
{
    for(let i = 0 ; i < 4; i++)
    { 
        $('#'+pattern[i]).css('background-color', 'pink');
        setTimeout(function() { 
            $('#'+pattern[i]).css('background-color', 'red');
        }, 2000);
       

    }
}