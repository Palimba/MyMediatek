import {Album} from '../../src/models/Album.js';
import { Game } from '../../src/models/Game.js'
import { Collection } from '../../src/models/Collection.js'
import { Movie } from '../../src/models/Movie.js'
import test from 'ava';

const album = new Album("Full Circle", 2016, 4, "http://neoprisme.com/wp-content/uploads/2016/03/haelos-x-laura-anne-hyde-full-circle.jpg", "HAELOS", 11);
const game = new Game("Hollow Knight", 2017, 5, "https://steamcdn-a.akamaihd.net/steam/apps/367520/header.jpg?t=1569430762", "Team Cherry", 1, "C'est un jeu qui a un bon plot");
const movie = new Movie("Scott Pilgrim vs. the World", 2010, 4, "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "Edgar Wright", "Michael Cera, Mary Elizabeth Winstead", 112, "Scott Pilgrim, un mec qui doit battre 7ex d'une fille pour pouvoir la conquérir");
let coll = new Collection();

test('construct_vides', t=>{
    t.is(coll.getNbMedias(), 0)
})

test('ajoutMedia', t=>{
    coll.addMedia(album);
    coll.addMedia(game);
    coll.addMedia(movie);
    t.is(coll.getNbMedias(), 3);
    t.deepEqual(coll.medias, [album, game, movie])
})

test('supprimerMedia', t=>{
    coll.removeMedia(album);
    t.is(coll.getNbMedias(), 2);
    t.deepEqual(coll.medias, [game, movie])
})

test('filter', t=>{
    coll.addMedia(movie);
    coll.addMedia(movie);
    let nbMovie = coll.filter(function(media){
        return media instanceof Movie;
    }).length;

    t.is(nbMovie, 3);
})
