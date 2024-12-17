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

    static configureRoot(config : SlugConfig, flow : SlugFlow) : SlugState {
        return flow.root = new SlugState(":", freezeClone(config), flow);
    }

    static configurePrefabs(state : SlugState) : SlugState[] {
        const sub = state.config.sub;
        if(!sub) {
            throw new Error("No sub defined for static slugs");
        }

        const prefabs : SlugState[] = [];
        for (const [name, config] of Object.entries(sub)) {
            prefabs.push(new SlugState(name, config, state));
        }

        return prefabs;
    }

    static configurePattern(name : string, parent : SlugState) : SlugState {
        const pattern = parent.config.pattern;

        if(!pattern) {
            throw new Error("No pattern defined for dynamic slugs");
        }

        return new SlugState(name, freezeClone(pattern), parent);
    }
}

export default SlugState;