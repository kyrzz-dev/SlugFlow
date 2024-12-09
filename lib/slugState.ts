import SlugFlow from "./slugFlow";
import SlugConfig from "./slug/config"
import SlugData, { LocalData } from "./slug/data"
import { fillData } from "./util/data";

export class SlugState {    
    private Name : string;
    private Depth : number;
    private Source : string[];
    private Data : SlugData;
    private Children: SlugState[] = [];

    private constructor(props : StateProps){
        this.Name = props.name;
        this.Depth = props.depth;
        this.Source = props.source;
        this.Data = props.data;
    }

    public get name() : Readonly<string> {
        return this.Name;
    }
 
    public get depth() : Readonly<number> {
        return this.Depth;
    }

    public get source() : ReadonlyArray<string> {
        return this.Source;
    }

    public get data() : Readonly<SlugData> {
        return this.Data;
    }

    public get children() : ReadonlyArray<SlugState> {
        return this.Children;
    }

    public static Build(root : SlugConfig, name : string = "", depth : number = -1, source : string[] = []) : SlugState {
        const stack: StateBuild[] = [];
        const rootState = new SlugState({
            name, depth, source,
            data: fillData(root)
        });

        const pushSub = (state : SlugState, config : SlugConfig) => {
            if(config.sub){
                for (const [name, child] of Object.entries(config.sub).reverse()) {
                    stack.push({
                        key: name, 
                        config: child,
                        parent: state,
                    });
                }
            }
        }

        pushSub(rootState, root);

        while (stack.length > 0) {
            const build = stack.pop();

            if(!build){
                break;
            }

            const state = new SlugState({
                name : build.key,
                depth : build.parent.depth + 1,
                source : [...build.parent.source, name],
                data : fillData(build.config, build.parent.data)
            });
            build.parent.Children.push(state);

            pushSub(state, build.config);
        }

        return rootState;
    }
}

export default SlugState;

export type StateBuild = {
    key : string;
    config : SlugConfig;
    parent : SlugState;
}

export type StateProps = {
    name : string;
    depth : number;
    source : string[];
    data : SlugData;
}