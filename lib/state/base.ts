import SlugState from "../slugState";

abstract class StateBase {
    #target : SlugState;

    protected constructor(target : SlugState){
        this.#target = target;
    }

    protected get target(){
        return this.#target;
    }
}

export default StateBase;