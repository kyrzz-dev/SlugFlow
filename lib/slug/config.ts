import SlugData from "./data";

export type SlugConfig = SlugData & {
    memoLast? : boolean;
    memoDefault? : boolean;
    sub? : SlugConfigSub;
}

export default SlugConfig; 

export type SlugConfigSub = {
    [name : string] : SlugConfig
}