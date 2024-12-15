import SlugState from "../slugState";
import StateContent from "./content";

class StateIs extends StateContent{
    #dynamic : boolean

    public constructor(target : SlugState) {
        super(target);
        this.#dynamic = false;
    }
}

export default StateIs;