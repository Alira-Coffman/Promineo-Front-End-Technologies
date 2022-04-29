//GLOBALS

let CRUD_URL = 'https://crudcrud.com/api/'
let CRUD_API ='d3f20127a4864d0288dba118868c4888';
let resourceName ='/user1';
// document.getElementById('new-movie').style.display = 'none';

let newMovieTitle = document.getElementById('new-movie-title');
let newMovieisbn = document.getElementById('new-movie-isbn');
let newMovieDirectorFN = document.getElementById('new-director-fn');
let newMovieDirectorLN = document.getElementById('new-director-ln');

let app = document.getElementById('app');

//OPTIONAL
// function getNewKey(){
//     CRUD_API = document.getElementById('new-api-key').value;
//     document.getElementById('createKey').style.display = 'none';
//     document.getElementById('new-movie').style.display = 'block';
// }

function createMovie()
{
    let movieObj = 
    {
        title: newMovieTitle.value,
        isbn : newMovieisbn.value,
        directors:{
            firstname: newMovieDirectorFN.value,
            lastname: newMovieDirectorLN.value
        }
    }

    console.log(CRUD_URL+CRUD_API+resourceName);
    fetch((CRUD_URL+CRUD_API+resourceName), {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(movieObj)
    })
    .then(response => response.json())
    .then(data => {
        console.log('SUCCESS', data);
    })
    .catch((error) => {
        console.error('ERrro', error);
    });

    renderMovies();

}

async function renderMovies()
{
    await fetch(CRUD_URL+CRUD_API+resourceName)
    .then(response => response.json())
    .then(data => {
        console.log('success', data);
        displayMovies(data);
    })
}

function displayMovies(data)
{
    //clear div
    app.innerHTML = '';
    

    for(let i = 0; i < data.length; i++)
    {
        let title = data[i].title;
        let isbn = data[i].isbn;
        let directors = data[i].directors;


        let movieItem  = 
        ` 
        <div id="${data[i]._id}" class="card">
        <div class="card-header">
            <h2>${title}</h2>
            <button class="btn btn-danger removeListBtn" value="${data[i]._id}">Delete</button>
        </div>
        <div class="card-body">
            <div class="row"><div class="col">
                isbn: ${isbn}
                <div id="directors">
                ${directors.firstname}
                ${directors.lastname}
                </div>
            </div></div>
        </div>

        `

        let movieContainer = document.createElement('div');
        movieContainer.innerHTML = movieItem;

        app.append(movieContainer);
    }

    var removeList = document.getElementsByClassName('removeListBtn');
    for(let x = 0; x < removeList.length; x++)
    {
        removeList[x].addEventListener('click', deleteMovie);
    }
}


function deleteMovie(){
    let movieId = '/' + this.value;
    console.log(movieId);

    fetch(CRUD_URL+CRUD_API+resourceName+movieId, {
        method: 'DELETE'
    })
    .then(() => renderMovies());
}

function updateMovie(movieId, movieObj){
    fetch((CRUD_URL+CRUD_API+resourceName+movieId), {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(movieObj)
    })
    .then(response => response.json())
    .then(data => {
        console.log('SUCCESS', data);
       
    })
    .catch((error) => {
        console.error('ERrro', error);
    });
 renderMovies();
}