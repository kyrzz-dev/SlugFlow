import StateContent from "./content";
import SlugState from "../slugState";
import SlugData, { SharedData, LocalData } from "../slug/data";
import SlugClone from "../util/slugClone";

class StateData extends StateContent {
    #shared : SharedData;
    #local : LocalData;
    #matched : SlugData;

    public constructor(target : SlugState){
        super(target);
        const parent = target.parent;

        this.#shared = SlugClone.sharedData(target.config, parent?.data.shared);
        this.#local = SlugClone.localData(target.config);
        this.#matched = SlugClone.slugData(target.config);
    }

    public get shared() : SharedData{
        return this.#shared
    }    
    public get local() : LocalData{
        return this.#local
    }
    public get matched() : SlugData{
        return this.#matched
    }
}

export default StateData;