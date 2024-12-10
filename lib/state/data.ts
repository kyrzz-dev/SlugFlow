import StateBase from "./base";
import SlugState from "../slugState";
import SlugData from "../slug/data";
import { configToData, fillData } from "../util/data";
import { cloneDeep } from "lodash";

class StateData extends StateBase {
    #current : SlugData;
    #matched : SlugData;

    public constructor(target : SlugState){
        super(target);

        const source = target.source;
        this.#matched = configToData(source.getConfig());

        const parent = source.parent;
        this.#current = fillData(this.#matched, parent?.data.cloneCurrent());
    }

    public cloneCurrent(){
        return cloneDeep(this.#current);
    }
    public cloneMatched(){
        return cloneDeep(this.#matched);
    }
}

export default StateData;