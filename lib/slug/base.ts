import SlugSource from "./source";
import SlugState from "../slugState";
import SlugFormat from "../util/slugFormat";

abstract class SlugBase {
    protected abstract target() : SlugState;

    public slug(src : SlugSource) : SlugState | null {
        const slugs = SlugFormat.toSlugs(src);
    
        if(slugs[0] == ':') {
            throw new Error("Invalid slug: Root path cannot begin with ':'");
        }
    
        const target = this.target();
        const hierarchy = target.nav;
        const content = hierarchy.getContent();
        const isLast = slugs.length == 1;
    
        for(const child of content){
            if(child.name == slugs[0]){
                
                if(isLast) {
                    return child;
                }

                return child.slug(SlugFormat.toRest(slugs));
            }
        }

        return null;
    }
}

export default SlugBase;