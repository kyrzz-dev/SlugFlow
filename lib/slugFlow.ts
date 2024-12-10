import SlugConfig from "./slug/config";
import SlugState from "./slugState";
import freezeClone from "./util/freezeClone";

export class SlugFlow {
    private static cache = new Map<string, SlugFlow>();
    #config : SlugConfig;
    #root : SlugState;


    private constructor(config : SlugConfig){
        this.#config = freezeClone(config);
        this.#root = SlugState.Build(this.#config);
    }

    public get config() : SlugConfig {
        return this.config;
    }

    public get root() : SlugState {
        return this.#root;
    }

    static Create(domain : string, config : SlugConfig) : SlugFlow {
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


    static Clear() {
        SlugFlow.cache.clear();
    }
}

export default SlugFlow;