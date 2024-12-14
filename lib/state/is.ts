import SlugState from "../slugState";
import StateContent from "./content";

class StateIs extends StateContent{
    #dynamic : boolean

    private constructor(target : SlugState) {
        super(target);
        this.#dynamic = false;
    }
}

export default StateIs;