export type SlugMeta = {
    title? : string,
    description? : string
}

export default SlugMeta;

export type SlugMetaDocs = {
    [lang : string] : SlugMeta
}