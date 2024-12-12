import SlugSource from "../slug/source";

function toSlugs(path : string) : string[];
function toSlugs(path : string, s : string) : string[];
function toSlugs(slugs : string[]) : string[];
function toSlugs(slugs : string[], s : string) : string[];
function toSlugs(src : SlugSource) : string[];
function toSlugs(src : SlugSource, s : string) : string[];
function toSlugs(src : SlugSource, s : string = '/') : string[] {
    if(Array.isArray(src)){
        return src;
    }

    if(s.length != 1) {
        throw new Error();
    }

    return src.split(s);
}

function toPath(path : string) : string;
function toPath(path : string, s : string) : string;
function toPath(slugs : string[]) : string;
function toPath(slugs : string[], s : string) : string;
function toPath(src : SlugSource) : string;
function toPath(src : SlugSource, s : string) : string;
function toPath(src : SlugSource, s: string = '/') : string {
    if(!Array.isArray(src)){
        return src;
    }

    if(s.length != 1) {
        throw new Error();
    }

    return src.join(s);
}

function toRest(path : string) : string[];
function toRest(path : string, i : number) : string[];
function toRest(slugs : string[]) : string[];
function toRest(slugs : string[], i : number) : string[];
function toRest(src : SlugSource) : string[];
function toRest(src : SlugSource, i : number) : string[];
function toRest(src : SlugSource, i : number = 1) : string[] {
    return toSlugs(src).slice(i);
}

function toSource(path : string) : string[];
function toSource(path : string, i : number) : string[];
function toSource(slugs : string[]) : string[];
function toSource(slugs : string[], i : number) : string[];
function toSource(src : SlugSource) : string[];
function toSource(src : SlugSource, i : number) : string[];
function toSource(src : SlugSource, i : number = -1) : string[] {
    return toSlugs(src).slice(0, i);
}

export { 
    toSlugs, toPath, toRest, toSource
}