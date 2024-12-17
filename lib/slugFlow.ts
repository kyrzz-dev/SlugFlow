import SlugBase from "./slug/base";
import SlugConfig from "./slug/config";
import SlugState from "./slugState";

const cache = new Map<string, SlugFlow>();

class SlugFlow extends SlugBase {
    #domain : string = "";
    #root? : SlugState;

    private constructor(config : SlugConfig){
        super();

        SlugState.configureRoot(config, this);        
    }

    public get domain() : string {
        return this.#domain;
    }

    public set domain(value : string) {
        if(this.#domain == value) {
            return;
        }

        if(value.trim().length === 0) {
            return;
        }    

        if(cache.has(value)) {
            throw new Error("domain already defined");
        }

        if(this.#domain.trim().length !== 0) { 
            cache.delete(this.#domain);
        }
        cache.set(value, this);
    }

    public get root() : SlugState {
        if(!this.#root) {
            throw new Error("Root not yet created");
        }

        return this.#root;
    }

    public set root(value : SlugState) {
        if(this.#root) {
            throw new Error("Root is already configured");
        }

        this.#root = value;
    } 

    protected target() : SlugState {
        return this.root;
    }

    //

    static create(config : SlugConfig) : SlugFlow {
        const flow = new SlugFlow(config);    
        return flow;
    }
}

const defineFlow = (domain : string, config : SlugConfig) : SlugFlow => {
    if(domain.trim().length == 0) {
        throw new Error("Domain cannot be empty");
    }

    const flow = SlugFlow.create(config);
    flow.domain = domain;

    return flow;
}

export default SlugFlow;
export { defineFlow }