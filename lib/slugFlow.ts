import SlugConfig from "./slug/config";
import SlugState from "./slugState";

export class SlugFlow {
    public static empty = new SlugFlow({});
    private static cache = new Map<string, SlugFlow>();
    private _root : SlugConfig;

    private constructor(root : SlugConfig){
        this._root = root;
    }

    public get root() : SlugConfig{
        return this._root;
    }

    static Create(domain : string, root : SlugConfig) : SlugFlow{
        if(domain == null || domain.length == 0){
            throw new Error("The specified cant be null or empty");
        }

        const flow = new SlugFlow(root);
        SlugFlow.Add(domain, flow);

        return flow;
    }

    static Add(domain : string, flow : SlugFlow) : void {
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