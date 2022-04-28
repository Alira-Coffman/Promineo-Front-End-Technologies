class Movie {
    constructor(isbn, title){
        this.isbn = isbn;
        this.title = title;
        this.directors = []
    }
    addDirector(firstname, lastname)
    {
        this.directors.push(new Director(firstname,lastname));
    }
}

class Director{
    constructor(firstname, lastname)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class MovieService{
    static url = 'http://127.0.0.1:8000/movies';

    static getAllMovies()
    {
        return $.get(this.url, function (data) {
            console.log('data from server --- ', data);
            });
    }

    static getMovie(id)
    {
        return $.get(this.url+ `/${id}`);  
    }
    static createMovie(movie)
    {
        console.log('movie',movie);
        return $.ajax({
            url: this.url,
            type: 'POST',
            crossDomain: true,
            contentType: 'application/json',
            data: {'data': movie},
            headers: {  'Access-Control-Allow-Origin': '*' },
          });
    }
    static updateMovie(movie)
    {
        return $.ajax({
            url: this.url + `/${movie.id}`,
            dataType: 'json', 
            data: JSON.stringify(movie),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteMovie(id)
    {
      
        return $.ajax({
            url:this.url + `/${id}`,
            type: 'DELETE'
        })
    }

}



class DOMManager{
    static movies;

    static getAllMovies()
    {
        MovieService.getAllMovies().then(Movies => this.render(Movies)); 

    }
    static deleteMovie(id)
    {
        console.log('deleting');
       MovieService.deleteMovie(id).then(() => {
            return MovieService.getAllMovies();
        }).then(movies => this.render(movies));
    }

    static createMovie(isbn, title, director)
    {
        let newMovie =  new Movie(isbn, title);
        console.log(newMovie);
        newMovie.addDirector(director)
        console.log(newMovie.directors)
        MovieService.createMovie(newMovie)
        .then(() => {
            return MovieService.getAllMovies();
        })
        .then(movies => this.render(movies));
    }
    static render(movies)
    {
        $('#app').empty();

        for(let movie of movies)
        {
            $('#app').prepend(
                `<div id="${movie.id}" class="card">
                <div class="card-header">
                    <h2>${movie.title}</h2>
                    <button class="btn btn-danger" onclick="DOMManager.deleteMovie('${movie.id}')">DELETE</button>
        
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            ISBN : ${movie.isbn}
                            <div id="director">
                                ${movie.director.firstname}
                                ${movie.director.lastname}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            )
        }
    }
}

$('#create-new-movie').on( "click",() => {
    let newTitle = $('#new-movie-title').val();
    let newIsbn = $('#new-movie-isbn').val();

    let newDirector =
    {
        firstname: $('#new-director-fn').val(),
        lastname: $('#new-director-ln').val(),
    } 
    console.log(newTitle, newIsbn, newDirector)

    DOMManager.createMovie(newIsbn, newTitle, newDirector);
    // $('#new-movie-title').val() = '';
    // $('#new-movie-isbn').val()  = '';
    // $('#new-director-fn').val() = '';
    // $('#new-director-ln').val() = '';

});

DOMManager.getAllMovies();