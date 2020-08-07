import { Movie } from '../../src/models/Movie.js'
import test from 'ava';

const movie = new Movie("Scott Pilgrim vs. the World", 2010, 4, "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "Edgar Wright", "Michael Cera, Mary Elizabeth Winstead", 112, "Scott Pilgrim, un mec qui doit battre 7ex d'une fille pour pouvoir la conquérir");
test('construct', t=>{
    t.is(movie.title, 'Scott Pilgrim vs. the World');
    t.is(movie.releaseDate, 2010);
    t.is(movie.rating, 4);
    t.is(movie.img, "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg");
    t.is(movie.director, "Edgar Wright");
    t.is(movie.actors, "Michael Cera, Mary Elizabeth Winstead");
    t.is(movie.duration, 112)
    t.is(movie.plot, "Scott Pilgrim, un mec qui doit battre 7ex d'une fille pour pouvoir la conquérir");

})