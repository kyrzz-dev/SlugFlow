import SlugSource from "../slug/source";

class SlugFormat {

    public static toSlugs(path : string) : string[];
    public static toSlugs(path : string, s : string) : string[];
    public static toSlugs(slugs : string[]) : string[];
    public static toSlugs(slugs : string[], s : string) : string[];
    public static toSlugs(src : SlugSource) : string[];
    public static toSlugs(src : SlugSource, s : string) : string[];
    public static toSlugs(src : SlugSource, s : string = '/') : string[] {
        if(Array.isArray(src)){
            return src;
        }
    
        if(s.length != 1) {
            throw new Error();
        }
    
        return src.split(s).filter(Boolean);
    }
    
    public static toPath(path : string) : string;
    public static toPath(path : string, s : string) : string;
    public static toPath(slugs : string[]) : string;
    public static toPath(slugs : string[], s : string) : string;
    public static toPath(src : SlugSource) : string;
    public static toPath(src : SlugSource, s : string) : string;
    public static toPath(src : SlugSource, s: string = '/') : string {
        if(!Array.isArray(src)){
            return src;
        }
    
        if(s.length != 1) {
            throw new Error();
        }
    
        return src.filter(Boolean).join(s);
    }
    
    public static toRest(path : string) : string[];
    public static toRest(path : string, i : number) : string[];
    public static toRest(slugs : string[]) : string[];
    public static toRest(slugs : string[], i : number) : string[];
    public static toRest(src : SlugSource) : string[];
    public static toRest(src : SlugSource, i : number) : string[];
    public static toRest(src : SlugSource, i : number = 1) : string[] {
        return SlugFormat.toSlugs(src).slice(i);
    }
    
    public static toSource(path : string) : string[];
    public static toSource(path : string, i : number) : string[];
    public static toSource(slugs : string[]) : string[];
    public static toSource(slugs : string[], i : number) : string[];
    public static toSource(src : SlugSource) : string[];
    public static toSource(src : SlugSource, i : number) : string[];
    public static toSource(src : SlugSource, i : number = -1) : string[] {
        return SlugFormat.toSlugs(src).slice(0, i);
    }    
}

export default SlugFormat;