import SlugState from "../slugState";
import StateBase from "./base";

class StateHierarchy extends StateBase {
    #depth : number;
    #source : SlugState[];
    #content? : SlugState[];

    public constructor(target : SlugState){
        super(target);

        const parent = target.parent;
        if(parent){
            const hierarchy = parent.hierarchy;

            this.#depth = hierarchy.depth + 1;
            this.#source = [...hierarchy.#source, parent];
        }
        else{
            this.#depth = -1;
            this.#source = [];
        }

        Object.freeze(this.#depth);
        Object.freeze(this.#source);
    }

    public get depth() : number{
        return this.#depth;
    }

    public get source() : SlugState[]{
        return this.#source;
    }

    public get content() : SlugState[] {
        if(this.#content){
            return this.#content;
        }

        const empty : SlugState[] = [];
        Object.freeze(empty);

        return empty;
    }

    public getContent(){
        if(!this.content){
            this.#content = [];

            SlugState.buildContent(super.target);
            Object.freeze(this.#content);
        }
        
        return this.content;
    }
}

export default StateHierarchy;