import {Media} from "./Media.js";

export class Album extends Media{

    constructor(t, rD, rate, img, artistes, nbTracks){
        super(t, rD, rate, img);
        this.artists = artistes;
        this.nbTracks = nbTracks;
    }
}