import type Model from "./Model"

type actorSettings = {
    model: Model;
    prompt: string;
}

class Actor{
    private model: Model;
    private prompt: string;

    constructor(settings: actorSettings){
        this.model = settings.model;
        this.prompt = settings.prompt;
    }

}