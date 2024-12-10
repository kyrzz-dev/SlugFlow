import SlugFlow from "./slugFlow";
import SlugConfig from "./slug/config"
import StateHierarchy from "./state/hierarchy";
import StateData from "./state/data";
import freezeClone from "./util/freezeClone";

export class SlugState {  
    #name : string;
    #config : SlugConfig;
    #flow : SlugFlow;
    #parent? : SlugState;

    #hierarchy : StateHierarchy;
    #data : StateData;

    private constructor(name : string, config : SlugConfig, top : SlugFlow | SlugState){
        this.#name = name;
        this.#config = config;

        if('parent' in top) {
            this.#flow = top.flow;
            this.#parent = top;
        }
        else {
            this.#flow = top;
            this.#parent = undefined;
        }

        this.#hierarchy = new StateHierarchy(this);
        this.#data = new StateData(this);
    }

    public get name() : string {
        return this.#name;
    }

    public get config() : SlugConfig {
        return this.#config;
    }

    public get flow() : SlugFlow {
        return this.#flow;
    }

    public get parent() : SlugState | undefined {
        return this.#parent;
    }
 

    public get hierarchy() : StateHierarchy {
        return this.#hierarchy;
    }

    public get data() : StateData {
        return this.#data;
    }

    static buildRoot(config : SlugConfig, flow : SlugFlow) : SlugState {
        return new SlugState("", freezeClone(config), flow);
    }
    
    static buildContent(state : SlugState) : SlugState[] {
        const config = state.config;
        const content : SlugState[] = [];

        if(config.sub){
            for (const [name, child] of Object.entries(config.sub).reverse()) {
                content.push(new SlugState(name, child, state));
            }
        }

        return content;
    }
}

export default SlugState;