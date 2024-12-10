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

        this.#matched = configToData(target.config);

        const parent = target.parent;
        this.#current = fillData(this.#matched, parent?.data.getCurrent());
    }

    public getCurrent(){
        return cloneDeep(this.#current);
    }
    public getMatched(){
        return cloneDeep(this.#matched);
    }
}

export default StateData;