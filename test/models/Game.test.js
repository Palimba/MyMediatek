import { Game } from '../../src/models/Game.js'
import test from 'ava';

const game = new Game("Hollow Knight", 2017, 5, "https://steamcdn-a.akamaihd.net/steam/apps/367520/header.jpg?t=1569430762", "Team Cherry", 1, "C'est un jeu qui a un bon plot");

test('construct', t=>{
    t.is(game.title, 'Hollow Knight');
    t.is(game.releaseDate, 2017);
    t.is(game.rating, 5);
    t.is(game.img, "https://steamcdn-a.akamaihd.net/steam/apps/367520/header.jpg?t=1569430762");
    t.is(game.studio, "Team Cherry");
    t.is(game.nbPlayers, 1);
    t.is(game.plot, "C'est un jeu qui a un bon plot");

})
