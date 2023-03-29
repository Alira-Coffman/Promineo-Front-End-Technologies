// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  $.get("https://deckofcardsapi.com/api/deck/new/", function(data, status){
    console.log('data: ', data, 'Status: ', status);
  });

//   $.post('https://crudcrud.com/api/7f015d95829d4de184e5a739d85cb4db/users', 
//   JSON.stringify({
//         "name": "King Kong",
//         "location" : "USA"

//   }), (data, status) => {
//     console.log('data: ', data, 'Status: ', status);

//   })

  $.ajax({
    type: 'post',
    url: 'https://crudcrud.com/api/7f015d95829d4de184e5a739d85cb4db/users',
    data: JSON.stringify({
                "name": "King Kong",
                "location" : "USA"
        
          }),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        console.log('data: ', data);
    }
});