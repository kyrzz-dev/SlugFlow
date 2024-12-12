function toSlugs(path : string) : string[];
function toSlugs(path : string, s : string) : string[];
function toSlugs(slugs : string[]) : string[];
function toSlugs(slugs : string[], s : string) : string[];
function toSlugs(src : string | string[]) : string[];
function toSlugs(src : string | string[], s : string) : string[];
function toSlugs(src : string | string[], s : string = '/') : string[] {
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
function toPath(src : string | string[]) : string;
function toPath(src : string | string[], s : string) : string;
function toPath(src : string | string[], s: string = '/') : string {
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
function toRest(src : string | string[]) : string[];
function toRest(src : string | string[], i : number) : string[];
function toRest(src : string | string[], i : number = 1) : string[] {
    return toSlugs(src).slice(i);
}

export { 
    toSlugs, toPath, toRest
}