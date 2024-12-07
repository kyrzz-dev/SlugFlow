import SlugConfig from "./config";

export default class SlugFlow {
    public root : SlugConfig

    constructor(root : SlugConfig){
        this.root = root;
    }
}

export function defineFlow(root : SlugConfig) : SlugFlow{
    return new SlugFlow(root);
}