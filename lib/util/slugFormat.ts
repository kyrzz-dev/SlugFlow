function toSlugsUnsafe(path : string) : string[];
function toSlugsUnsafe(path : string, s : string) : string[];
function toSlugsUnsafe(path : string, s : string = '/') : string[] {
    return path.split(s);
}
function toSlugs(path : string) : string[];
function toSlugs(path : string, s : string) : string[];
function toSlugs(path : string, s : string = '/') : string[] {
    if(s.length != 1) {
        throw new Error();
    }

    return toSlugsUnsafe(path, s);
}

function toPathUnsafe(slugs : string[]) : string;
function toPathUnsafe(slugs : string[], s : string) : string;
function toPathUnsafe(slugs : string[], s: string = '/') : string {
    return slugs.join(s);
}

function toPath(slugs : string[]) : string;
function toPath(slugs : string[], s : string) : string;
function toPath(slugs : string[], s: string = '/') : string {
    return toPathUnsafe(slugs, s);
}

export { 
    toSlugsUnsafe, toSlugs,
    toPathUnsafe, toPath 
}