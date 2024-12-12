import SlugState from "../slugState";

abstract class StateContent {
    #target : SlugState;

    protected constructor(target : SlugState){
        this.#target = target;
    }

    protected get target(){
        return this.#target;
    }
}

export default StateContent;