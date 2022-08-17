$( "#div" ).addClass( "myClass yourClass" );

$('div').mouseover(function(){
    $('p').hide();
});

$('div').mouseleave(function(){
    $('p').show();
})


//CRUD - create/POST, read/GET, update/PATCH, delete/DETELE


//get call list of user
// let list = $.get('');
// console.log(list)

function getUsers()
{
    $.get( "https://reqres.in/api/users/2", function( data ) {
    console.log( "Data Loaded: " + data );
  });

}

function addUsers()
{
    let newuser = {
        "name": "morpheus",
        "job": "leader"
    }
    $.ajax({
        type: "POST",
        url: '/api/users',
        data: newuser,
        dataType: 'json',
        contentType: 'application/json',
      });
}





//get single user

