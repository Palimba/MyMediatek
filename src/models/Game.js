import { Media } from "./Media.js";

export class Game extends Media{

    constructor(t, rD, rate, img, studio, nbPlayers, plot){
        super(t, rD, rate, img);
        this.studio = studio;
        this.nbPlayers = nbPlayers;
        this.plot = plot;
    }
}