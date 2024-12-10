import SlugState from "../slugState";
import StateBase from "./base";

class StateHierarchy extends StateBase {
    #depth : number;
    #source : SlugState[];
    #content? : SlugState[];

    public constructor(target : SlugState){
        super(target);

        const source = target.source;
        if(source.parent){
            const hierarchy = source.parent.hierarchy;

            this.#depth = hierarchy.depth + 1;
            this.#source = [...hierarchy.#source, source.parent];
        }
        else{
            this.#depth = -1;
            this.#source = [];
        }
    }

    public get depth() : number{
        return this.#depth;
    }

    public cloneSource() : SlugState[]{
        return [...this.#source];
    }

    public cloneContent(){
        if(this.#content){
            return [...this.#content];
        }
    }
}

export default StateHierarchy;