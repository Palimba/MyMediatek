import { Media } from '../../src/models/Media.js'
import test from 'ava';

const media = new Media('Titre Media', 2004, 3, 'https://imageDeMedia.jpg')

test('construct', t=>{
    t.is(media.title, 'Titre Media');
    t.is(media.releaseDate, 2004);
    t.is(media.rating, 3);
    t.is(media.img, "https://imageDeMedia.jpg");

})