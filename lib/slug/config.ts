import SlugData from "./data";

type SlugConfig = SlugData & {
    pattern? : SlugConfig
    sub? : ConfigSub;
}

type ConfigSub = {
    [name : string] : SlugConfig
}

export default SlugConfig;
export { ConfigSub };