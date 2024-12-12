import SlugSource from "./source";
import SlugState from "../slugState";
import { toRest, toSlugs } from "../util/slugFormat";

abstract class SlugBase {
    protected abstract target() : SlugState;

    public getState(src : SlugSource) : SlugState | null {
        const slugs = toSlugs(src);
    
        if(slugs[0] == ':') {
            throw new Error("Invalid slug: Root path cannot begin with ':'");
        }
    
        const target = this.target();
        const hierarchy = target.hierarchy;
        const content = hierarchy.getContent();
        const isLast = slugs.length == 1;
    
        for(const child of content){
            if(child.name == slugs[0]){
                
                if(isLast) {
                    return child;
                }

                return child.getState(toRest(slugs));
            }
        }

        return null;
    }
}

export default SlugBase;