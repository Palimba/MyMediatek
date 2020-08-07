import {Album} from './models/Album.js'
import { Collection } from './models/Collection.js'
import { Movie } from './models/Movie.js';
import { Game } from './models/Game.js';

let doc =  window.document.querySelector('div.row.text-center')

let collection  = new Collection();



function addAlbum(alb){
    let i = doc.children.length+1;

    let mediaAlbum = document.createElement('div');
    mediaAlbum.className = "col-lg-3 col-md-6 mb-4"
    mediaAlbum.innerHTML += '<div class="card h-100">' 
    + '<img class="card-img-top" src="'+ alb.img +'" alt="">'
    + '<div class="card-body">'
    + '<h4 class="card-title">'+ alb.title + '</h4>'
    + '<p class="card-text"> Release: '+ alb.releaseDate + ' - Rating: ' + alb.rating + '/5 - Artistes: ' + alb.artists + ' - Tracks: ' + alb.nbTracks + '</p>'
    + '</div>'
    + '<div class="card-footer">'
    + '<button class="btn btn-secondary" name="'+ i + '">Supprimer</button>'
    + '</div></div></div>';

    document.getElementById('content').appendChild(mediaAlbum)
    let btn = document.getElementsByName(""+i);
    btn[0].addEventListener("click", function (){
        mediaAlbum.remove()
        collection.removeMedia(game)
    })

}

function addMovie(movie){
    let i = doc.children.length+1;
    let mediaMovie = document.createElement('div');
    mediaMovie.className = "col-lg-3 col-md-6 mb-4"
    mediaMovie.innerHTML += '<div class="card h-100">' 
    + '<img class="card-img-top" src="'+ movie.img +'" alt="">'
    + '<div class="card-body">'
    + '<h4 class="card-title">'+ movie.title + '</h4>'
    + '<p class="card-text">Release: '+ movie.releaseDate + ' - Rating: ' + movie.rating + '/5 - Director: ' + movie.director + ' - Actors: ' + movie.actors + ' - Duration(min): ' + movie.duration + '</p>'
    + '<p class="card-text">Plot: '+ movie.plot +'</p>'
    + '</div>'
    + '<div class="card-footer">'
    + '<button class="btn btn-secondary" name="'+ i + '">Supprimer</button>'
    + '</div></div></div>';

    document.getElementById('content').appendChild(mediaMovie)
    let btn = document.getElementsByName(""+i);
    btn[0].addEventListener("click", function (){
        mediaMovie.remove()
        collection.removeMedia(movie)
    })

}

function addGame(game){
    let i = doc.children.length+1;
    let mediaGame = document.createElement('div');
    mediaGame.className = "col-lg-3 col-md-6 mb-4"
    mediaGame.innerHTML +=  '<div class="card h-100">' 
    + '<img class="card-img-top" src="'+ game.img +'" alt="">'
    + '<div class="card-body">'
    + '<h4 class="card-title">'+ game.title + '</h4>'
    + '<p class="card-text">Release: '+ game.releaseDate + ' -Rating: ' + game.rating + ' - Studio: ' + game.studio + ' - Nb players: ' + game.nbPlayers + '</p>'
    + '<p class="card-text">Plot: '+ game.plot +'</p>'
    + '</div>'
    + '<div class="card-footer">'
    + '<button class="btn btn-secondary" name="'+ i + '">Supprimer</button>'
    + '</div></div></div>';

    document.getElementById('content').appendChild(mediaGame)
    let btn = document.getElementsByName(""+i);
    btn[0].addEventListener("click", function (){
        mediaGame.remove()
        collection.removeMedia(game)
    })
    
}


const movie1 = new Movie("Scott Pilgrim vs. the World", 2010, 4, "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "Edgar Wright", "Michael Cera, Mary Elizabeth Winstead", 112, "Scott Pilgrim, un dragueur invétéré de 22 ans, sans grande autre occupation que de jouer de la basse avec les Sex Bob-omb, un groupe de garage rock, rencontre enfin la fille de ses rêves. Un seul problème se pose : pour conquérir le coeur de l'insaisissable et mystérieuse Ramona Flowers, Scott doit d'abord combattre ses 7 ex maléfiques qui n'ont pour autre raison d'être que de chercher à l'éliminer.");
const album1 = new Album("Full Circle", 2016, 4, "http://neoprisme.com/wp-content/uploads/2016/03/haelos-x-laura-anne-hyde-full-circle.jpg", "HAELOS", '11');
const game1 = new Game("Hollow Knight", 2017, 5, "https://steamcdn-a.akamaihd.net/steam/apps/367520/header.jpg?t=1569430762", "Team Cherry", 1, "Hollow Knight is a 2D Metroidvania action-adventure game, which takes place in Hallownest, a fictional ancient kingdom. The player controls an insect-like, silent, and nameless knight while exploring the underground world. ... By striking enemies, the knight gains Soul, which is stored in the Soul Vessel.");


addAlbum(album1);
addMovie(movie1);
addGame(game1);
collection.addMedia(movie1);
collection.addMedia(album1);
collection.addMedia(game1);



const ajoutMusique = document.getElementById('submit_album');
const ajoutMovie = document.getElementById('submit_movie');
const ajoutGame = document.getElementById('submit_game');
    
ajoutMusique.addEventListener("click", function(event){
    event.preventDefault();
    const titre = document.getElementById('aTitre').value;
    const rD = document.getElementById('aRelease').value;
    const note = document.getElementById('aRate').value;
    const img = document.getElementById('aImg').value;
    const artiste = document.getElementById('aArtiste').value;
    const nbTracks = document.getElementById('aTracks').value;
    const album = new Album(titre, rD, note, img , artiste, nbTracks)
    addAlbum(album);
    collection.addMedia(album);
})

ajoutMovie.addEventListener("click", function(event){
    event.preventDefault();
    const titre = document.getElementById('mTitre').value;
    const rD = document.getElementById('mRelease').value;
    const note = document.getElementById('mRate').value;
    const img = document.getElementById('mImg').value;
    const director = document.getElementById('mDirector').value;
    const acteurs = document.getElementById('mActeurs').value;
    const duration = document.getElementById('mDuration').value;
    const plot = document.getElementById('mPlot').value;
    const movie = new Movie(titre, rD, note, img, director, acteurs, duration, plot)
    addMovie(movie);
    collection.addMedia(movie);
}) 

ajoutGame.addEventListener("click", function(event){
    event.preventDefault();
    const titre = document.getElementById('gTitre').value;
    const rD = document.getElementById('gRelease').value;
    const note = document.getElementById('gRate').value;
    const img = document.getElementById('gImg').value;
    const studio = document.getElementById('gStudio').value;
    const nbJoueurs = document.getElementById('gNbPlayers').value;
    const plot = document.getElementById('gPlot').value;
    const game = new Game(titre, rD,note ,img , studio, nbJoueurs, plot)
    addGame(game);
    collection.addMedia(game);
}) 


const btnAll = document.getElementById('all');

const btnAlbum = document.getElementById('fAlbum');
const albumFilter = function(media){
    return media instanceof Album;
}
const btnMovie = document.getElementById('fMovie');
const movieFilter = function(media){
    return media instanceof Movie;
}
const btnGame = document.getElementById('fGame');
const gameFilter = function(media){
    return media instanceof Game;
}


btnAlbum.addEventListener("click", function(){
    doc.innerHTML = "";
    for(let album of collection.filter(albumFilter)) {
        addMovie(album);
    }
})

btnMovie.addEventListener("click", function(){
    doc.innerHTML = "";
    for(let movie of collection.filter(movieFilter)) {
        addMovie(movie);
    }
})

btnGame.addEventListener("click", function(){
    doc.innerHTML = "";
    for(let game of collection.filter(gameFilter)) {
        addMovie(game);
    }
})


btnAll.addEventListener("click", function(){
    doc.innerHTML = "";
    for(let media of collection.medias){
        if (media instanceof Album){
            addAlbum(media)
        }else if(media instanceof Movie){
            addMovie(media)
        }else{
            addGame(media)
        }
    }
})