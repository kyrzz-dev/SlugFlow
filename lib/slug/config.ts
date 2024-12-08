import SlugData from "./data";

export type SlugConfig = SlugData & {
    memoLast? : boolean;
    memoDefault? : boolean;
    sub? : { [name : string] : SlugConfig} ;
}

export default SlugConfig; 