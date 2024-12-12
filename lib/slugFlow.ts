import SlugBase from "./slug/base";
import SlugConfig from "./slug/config";
import SlugState from "./slugState";

class SlugFlow extends SlugBase {
    static cache = new Map<string, SlugFlow>();
    #config : SlugConfig;
    #root : SlugState;

    private constructor(config : SlugConfig){
        super();
        this.#root = SlugState.buildRoot(config, this);        
        this.#config = this.#root.config;
    }

    public get config() : SlugConfig {
        return this.#config;
    }

    public get root() : SlugState {
        return this.#root;
    }

    protected target() : SlugState {
        return this.root;
    }

    static Clear() {
        SlugFlow.cache.clear();
    }

    static defineFlow(domain : string, config : SlugConfig) : SlugFlow {
        if(domain == null || domain.length == 0){
            throw new Error("The specified cant be null or empty");
        }
    
        if(SlugFlow.cache.has(domain)){
            throw new Error("The specified domain already exists");
        }
    
        const flow = new SlugFlow(config);
        SlugFlow.cache.set(domain, flow);
    
        return flow;
    }
}

export default SlugFlow;