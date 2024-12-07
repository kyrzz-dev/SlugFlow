import SlugData from "./data";

export default interface SlugConfig extends SlugData {
    memoLast? : boolean;
    memoDefault? : boolean;
    sub? : SlugConfigSub;
}

export type SlugConfigSub = {
    [name : string] : SlugConfig
}