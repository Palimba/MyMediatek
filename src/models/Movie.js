import { Media } from "./Media.js";

export class Movie extends Media{

    constructor(t, rD, rate, img, director, actors, duration, plot){
        super(t, rD, rate, img);
        this.director = director;
        this.actors = actors;
        this.duration = duration;
        this.plot = plot;
    }
}