$('.para').css('color', 'green');
$('#text').css('color', 'red');

//change bg of body to be purple
$('body').css('background-color', 'gray');

//append a hello world paragraph to container div
$('.container').append('<h2>Hello World</h2>');

// $('.container').on("mouseleave", function() {
//     console.log( 'hello' );
//     $('.container').append('<h2>Hello World</h2>');
// });

//append a hello world on mouse enter & remove it on mouse leave
$('.container').on("mouseenter", function(){
    console.log('helloWorld - enter');
    $('.container').append('<h2 class="header">Hello World</h2>');
});

$('.container').on("mouseleave", function(){
    console.log('helloWorld - leave');
    $( ".header" ).remove();
});


$('#form-field').on("blur", function(){
    console.log($('#form-field').val());
    $('.container').append($('#form-field').val());
});


// function testFunc()
// {
//     console.log($('#form-field').val());
   
// }

$.ajax({
    url: "https://reqres.in/api/users/2",
    beforeSend: function( xhr ) {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
  })
    .done(function( data ) {
      if ( console && console.log ) {
        console.log( "Sample of data:", data );
        console.log(JSON.parse(data));
        data.data;
      }
    });

// let objectTest = {"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};

// console.log(typeof(objectTest))