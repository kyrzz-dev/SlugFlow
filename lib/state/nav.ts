import SlugState from "../slugState";
import StateContent from "./content";

class StateNav extends StateContent {
    #depth : number;
    #source : SlugState[];
    #pool : SlugState[];
    #content? : SlugState[];

    public constructor(target : SlugState){
        super(target);

        const parent = target.parent;
        if(parent){
            const nav = parent.nav;

            this.#depth = nav.depth + 1;
            this.#source = [...nav.source, parent];
        }
        else{
            this.#depth = -1;
            this.#source = [];
        }

        this.#pool = [];

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
        if(!this.#content) {
            this.#content = [];

            SlugState.buildContent(super.target);
            Object.freeze(this.#content);
        }
        
        return this.content;
    }
}

export default StateNav;