
export class Collection{

    constructor(){
        this.medias = [];
    }

    addMedia(media){
        this.medias.push(media);
    }

    removeMedia(media){
        let i = this.medias.indexOf(media);
        this.medias.splice(i, 1);

    }

    getNbMedias(){
        return this.medias.length;
    }

    filter(filterFn){
        return this.medias.filter(filterFn);
    }
}