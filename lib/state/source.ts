import { cloneDeep } from "lodash";
import SlugConfig from "../slug/config";
import SlugState, { StateProps } from "../slugState";
import StateBase from "./base";


class StateSource extends StateBase{
    #name : string;
    #config : SlugConfig;
    #parent? : SlugState;

    constructor(target : SlugState, props : StateProps){
        super(target);
        this.#name = props.name;
        this.#config = props.config;
        this.#parent = props.parent;
    }

    public get name() : string {
        return this.#name;
    }

    public getConfig() : SlugConfig {
        return cloneDeep(this.#config);
    }

    public get parent() : SlugState | undefined {
        return this.#parent;
    }
}

export default StateSource