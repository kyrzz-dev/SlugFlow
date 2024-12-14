import SlugFlow from "./slugFlow";
import SlugBase from "./slug/base";
import SlugConfig from "./slug/config"
import StateNav from "./state/nav";
import StateData from "./state/data";
import freezeClone from "./util/freezeClone";
import StateIs from "./state/is";

export class SlugState extends SlugBase{
    #name : string;
    #config : SlugConfig;
    #flow : SlugFlow;
    #parent? : SlugState;

    #is: StateIs;
    #nav : StateNav;
    #data : StateData;

    private constructor(name : string, config : SlugConfig, top : SlugFlow | SlugState){
        super();
        
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

        this.#is = new StateIs(this);
        this.#nav = new StateNav(this);
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
 

    public get nav() : StateNav {
        return this.#nav;
    }

    public get data() : StateData {
        return this.#data;
    }

    protected target() : SlugState {
        return this;
    }

    static buildRoot(config : SlugConfig, flow : SlugFlow) : SlugState {
        if(flow.root) {
            throw new Error("Root build cannot be called manually");
        }

        return new SlugState(":", freezeClone(config), flow);
    }
    
    static buildContent(state : SlugState) : void {
        const nav = state.nav;
        const content : SlugState[] = nav.content;

        if(Object.isFrozen(content)) {
            throw new Error("Content build cannot be called manually");
        }

        const config = state.config;

        if(config.sub){
            for (const [name, child] of Object.entries(config.sub).reverse()) {
                content.push(new SlugState(name, child, state));
            }
        }
    }
}

export default SlugState;