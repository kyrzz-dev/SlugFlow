import SlugBase from "./slug/base";
import SlugConfig from "./slug/config";
import SlugState from "./slugState";

class SlugFlow extends SlugBase {
    static cache = new Map<string, SlugFlow>();
    #root : SlugConfig;
    #state : SlugState;

    private constructor(root : SlugConfig){
        super();
        this.#state = SlugState.buildRoot(root, this);        
        this.#root = this.#state.config;
    }

    public get root() : SlugConfig {
        return this.#root;
    }

    public get state() : SlugState {
        return this.#state;
    }

    protected target() : SlugState {
        return this.state;
    }

    static Clear() {
        SlugFlow.cache.clear();
    }

    static defineFlow(domain : string, root : SlugConfig) : SlugFlow {
        if(domain == null || domain.length == 0){
            throw new Error("The specified cant be null or empty");
        }
    
        if(SlugFlow.cache.has(domain)){
            throw new Error("The specified domain already exists");
        }
    
        const flow = new SlugFlow(root);
        SlugFlow.cache.set(domain, flow);
    
        return flow;
    }
}

export default SlugFlow;