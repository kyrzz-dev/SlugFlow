import SlugMeta, { SlugMetaDocs } from "./meta";

export type SlugData = {
    layout? : string;
    meta? : SlugMeta | SlugMetaDocs
}

export default SlugData;