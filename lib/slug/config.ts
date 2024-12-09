import SlugData from "./data";

export type SlugConfig = SlugData & {
    sub? : { [name : string] : SlugConfig} 
}

export default SlugConfig;