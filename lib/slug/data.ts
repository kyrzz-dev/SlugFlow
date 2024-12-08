import SlugMeta from "./meta";

export type SlugData = {
    layout? : string;
    meta? : SlugMeta | {[lang : string] : SlugMeta}
}

export default SlugData;