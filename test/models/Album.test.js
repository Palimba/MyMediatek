import {Album} from '../../src/models/Album.js';
import test from 'ava';

const album = new Album("Full Circle", 2016, 4, "http://neoprisme.com/wp-content/uploads/2016/03/haelos-x-laura-anne-hyde-full-circle.jpg", "HAELOS", 11);

test('construct', t=>{
    t.is(album.title, 'Full Circle');
    t.is(album.releaseDate, 2016);
    t.is(album.rating, 4);
    t.is(album.img, "http://neoprisme.com/wp-content/uploads/2016/03/haelos-x-laura-anne-hyde-full-circle.jpg");
    t.is(album.artists, "HAELOS");
    t.is(album.nbTracks, 11);

})
