// [
//     {
//         "id": "1",
//         "isbn": "438227",
//         "title": "Movie 1",
//         "director": {
//             "firstname": "John",
//             "lastname": "Smith"
//         }
//     },
//     {
//         "id": "2",
//         "isbn": "141231",
//         "title": "Movie 2",
//         "director": {
//             "firstname": "Jane",
//             "lastname": "Smith"
//         }
//     }
//]

class Movie{
    constructor(title, isbn)
    {
        this.title = title;
        this.isbn = isbn;
        this.directors =[]
    }
    addDirector(firstname, lastname)
    {
        this.directors.push(new Director(firstname, lastname));
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


    //GET
    static getAllMovies()
    {
        return $.get(this.url, function (data) {
            console.log('data from server --- ', data);
            });
    }

    //Get
    static getMovie(id)
    {
        return $.get(this.url +`/${id}`, function (data) {
            console.log('data from server --- ', data);
            });
    }

    //POST
    static createMovie(movie)
    {
        return $.post(this.url, movie);
    }
    //Put
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
    //DELETE
    static deleteMovie(id)
    {
        return $.ajax({
            url: this.url + `/${movie.id}`,
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
        MovieService.deleteMovie(id).then(() => {
            return MovieService.getAllMovies()
        }).then(Movies => this.render(Movies));
    }

    static createMovie(isbn, title, director)
    {
        let newMovie = new Movie(isbn, title);
        newMovie.addDirector(director);
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
                `<div class="card">

                <div class="card-body bg-light border-bottom">
                    <h2>${movie.title}</h2>
                    <button class="btn btn-danger" onclick="DOMManager.deleteMovie('${movie.id}')">DELETE</button>
                </div>  
                <div class="m-3">
                    <p class="m-0">Isbn:${movie.isbn}</p>
                    <p class="m-0"> ${movie.director.firstname}
                    ${movie.director.lastname}</p>
        
                </div>
              
        </div>`
            )
        }
    }

}
DOMManager.getAllMovies();

$('create-new-movie').on( 'click', () => {
    let newTitle = $('#new-movie-title').val();
    let newIsbn = $('#new-movie-isbn').val();

    let newDirector =
    {
        firstname: $('#new-director-fn').val(),
        lastname: $('#new-director-ln').val(),
    } 
    console.log(newTitle, newIsbn, newDirector)

    DOMManager.createMovie(newIsbn, newTitle, newDirector);
}

)
// MovieService.getAllMovies();

// MovieService.getMovie('1');

// let test = {
           
//             "isbn": "41231",
//             "title": "Movie 3",
//             "director": {
//                 "firstname": "Fred",
//                 "lastname": "Flinstone"
//             }
//         }

//         let Test2 = 
//         {
//                     "id": "1",
//                     "isbn": "438227",
//                     "title": "Movie 1",
//                     "director": {
//                         "firstname": "John",
//                         "lastname": "Smith"
//                     }
//                 }
// MovieService.createMovie(test);
// MovieService.updateMovie(Test2);
// MovieService.getAllMovies();