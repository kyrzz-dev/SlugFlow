import SlugConfig from "./slug/config";
import SlugState from "./slugState";

export class SlugFlow {
    private static cache = new Map<string, SlugFlow>();
    private _root : SlugState;


    private constructor(root : SlugState){
        this._root = root;
    }

    public get root() : SlugState{
        return this._root;
    }

    static Create(root : SlugConfig) : SlugFlow{
        const state = SlugState.Build(root);

        return new SlugFlow(state);
    }

    static Define(domain : string, flow : SlugFlow) : void {
        if(domain == null || domain.length == 0){
            throw new Error("The specified cant be null or empty");
        }

        if(SlugFlow.cache.has(domain)){
            throw new Error("The specified domain already exists");
        }

        SlugFlow.cache.set(domain, flow);
    }

    
    static Clear() {
        SlugFlow.cache.clear();
    }
}

export default SlugFlow;