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

export { 
    toSlugs, toPath 
}