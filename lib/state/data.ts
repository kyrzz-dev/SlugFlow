import StateBase from "./base";
import SlugState from "../slugState";
import SlugData, { SharedData, LocalData } from "../slug/data";
import { sharedClone, localClone, dataClone } from "../util/slugData";

class StateData extends StateBase {
    #shared : SharedData;
    #local : LocalData;
    #matched : SlugData;

    public constructor(target : SlugState){
        super(target);
        const parent = target.parent;

        this.#shared = sharedClone(target.config, parent?.config);
        this.#local = localClone(target.config);
        this.#matched = dataClone(target.config);
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