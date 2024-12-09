import SlugMeta from "./meta";

export type SlugData = SharedData & LocalData;

export default SlugData;


export type SharedData = {
    layout? : string;
    access? : string;
    meta? : SlugMeta | {[lang : string] : SlugMeta}
}

export type LocalData = {
    memoLast? : boolean;
    memoDefault? : boolean;
}