import SlugConfig from "./slug/config";

export class SlugFlow {
    public static empty = new SlugFlow({});
    private static cache = new Map<string, SlugFlow>();
    private root : SlugConfig;

    private constructor(root : SlugConfig){
        this.root = root;
    }

    static Create(domain : string, root : SlugConfig) : SlugFlow{

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