export default interface SlugMeta {
    title? : string,
    description? : string
}

export type SlugMetaDocs = {
    [lang : string] : SlugMeta
}