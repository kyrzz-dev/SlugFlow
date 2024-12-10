import SlugConfig from "./slug/config"
import StateSource from "./state/source";
import StateHierarchy from "./state/hierarchy";
import StateData from "./state/data";
import { fillData } from "./util/data";
import StateProps from "./state/props";

export class SlugState {  
    #source : StateSource;
    #hierarchy : StateHierarchy;
    #data : StateData;

    private constructor(props : StateProps){
        this.#source = new StateSource(this, props);
        this.#hierarchy = new StateHierarchy(this);
        this.#data = new StateData(this);
    }

    
    public get source() : StateSource {
        return this.#source;
    }
 
    public get hierarchy() : StateHierarchy {
        return this.#hierarchy;
    }

    public get data() : StateData {
        return this.#data;
    }

    public static Build(root : SlugConfig) : SlugState {
        const stack: StateProps[] = [];
        const rootState = new SlugState({name: "", config: root});

        const pushSub = (state : SlugState, config : SlugConfig) => {
            if(config.sub){
                for (const [name, child] of Object.entries(config.sub).reverse()) {
                    stack.push({
                        name: name, 
                        config: child,
                        parent: state,
                    });
                }
            }
        }

        pushSub(rootState, root);

        while (stack.length > 0) {
            const props = stack.pop();

            if(!props){
                break;
            }

            const state = new SlugState(props);
            //props.parent?.hierarchy.Children.push(state);

            //pushSub(state, build.config);
        }

        return rootState;
    }
}

export default SlugState;