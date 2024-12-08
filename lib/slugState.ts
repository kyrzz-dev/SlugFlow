import SlugFlow from "./slugFlow";
import SlugConfig from "./slug/config"
import SlugData from "./slug/data"

export class SlugState {    
    private _name : string;
    private _config : SlugConfig;
    private _display : SlugData;
    private _depth : number;
    private _source : string[];
    private _children: SlugState[] = [];

    constructor(props : SlugStateProps){
        this._name = props.name;
        this._config = props.config;
        this._display = props.display ? props.display : props.config;
        this._depth = props.depth;
        this._source = props.source;
    }

    public get name() : Readonly<string> {
        return this._name;
    }

    public get config() : Readonly<SlugConfig> {
        return this._config;
    }

    public get display() : Readonly<SlugData> {
        return this._display;
    }

    public get depth() : Readonly<number> {
        return this._depth;
    }

    public get source() : ReadonlyArray<string> {
        return this._source;
    }


    public static Build(root : SlugConfig, name : string = "", depth : number = -1, source : string[] = []) : SlugState {
        const stack: SlugStateBuild[] = [];
        const rootDepth = depth;

        const pushSub = (state : SlugState) => {
            if(state.config.sub){
                for (const [name, child] of Object.entries(state.config.sub).reverse()) {
                    stack.push({
                        name: name, 
                        config: child,
                        parent: state,
                    });
                }
            }
        }

        const rootState = new SlugState({
            config : root,
            name,     
            depth,
            source
        });

        pushSub(rootState);

        while (stack.length > 0) {
            const build = stack.pop();

            if(!build){
                break;
            }

            const state = new SlugState({
                name : build.name,
                config : build.config,
                display : { ...build.parent.config, ...build.config},
                depth : build.parent.depth + 1,
                source : [...build.parent.source, name]
            });
            build.parent?._children.push(state);

            pushSub(state);
        }

        return rootState;
    }
}

export type SlugStateSource = {
    name : string;
    config : SlugConfig;
}

export type SlugStateBuild = SlugStateSource & {
    parent : SlugState;
}

export type SlugStateProps = SlugStateSource & {
    display? : SlugData;
    depth : number;
    source : string[];
}

export default SlugState;