import SlugConfig from "./config";

const cache = new Map<string, SlugFlow>()

export class SlugFlow {
    root : SlugConfig;

    private constructor(root : SlugConfig){
        this.root = root;
    }

    static Create(domain : string, root : SlugConfig) : SlugFlow{
        if(cache.has(domain)){
            throw new Error("The specified domain already contains");
        }

        const flow = new SlugFlow(root);
        cache.set(domain, flow);
        
        return flow;
    }
}

export default SlugFlow;