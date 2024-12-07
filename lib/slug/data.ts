import SlugMeta, { SlugMetaDocs } from "./meta";

export default interface SlugData {
    layout? : string;
    meta? : SlugMetaDocs | SlugMeta
}