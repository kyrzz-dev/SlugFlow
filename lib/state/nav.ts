import SlugState from "../slugState";
import StateContent from "./content";

class StateNav extends StateContent {
    #depth : number;
    #source : SlugState[];
    #pool : SlugState[];
    #prefabs : boolean;

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
        this.#prefabs = false;
    }

    public get depth() : number{
        return this.#depth;
    }

    public get source() : ReadonlyArray<SlugState> {
        return this.#source;
    }

    public get pool() : ReadonlyArray<SlugState> {
        this.initPrefabs();
        return this.#pool;
    }

    initPrefabs() {
        if(this.#prefabs) {
            return;
        }

        for(const prefab of SlugState.configurePrefabs(super.target)) {
            this.#pool.push(prefab);
        }
        
        this.#prefabs = true;
    }

    public slug(name : string) : SlugState | undefined {
        return this.#pool.find(slug => slug.name == name);
    }

    public pattern(name : string) {
        if(this.slug(name)) {
            throw new Error("Slug with specified name already exists");
        }

        const state = SlugState.configurePattern(name, super.target);
        this.#pool.push(state);

        return state;
    }
}

export default StateNav;