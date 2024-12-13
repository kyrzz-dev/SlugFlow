import SlugSource from "./source";
import SlugState from "../slugState";
import SlugFormat from "../util/slugFormat";

abstract class SlugBase {
    protected abstract target() : SlugState;

    public slug(src : SlugSource) : SlugState {
        const slug = this.getSlug(SlugFormat.toSlugs(src));

        if(!slug) {
            throw new Error("Slug not found on specified target");
        }

        return slug;
    }

    private getSlug(slugs : string[]) : SlugState | null{
        if (slugs.length === 0) {
            return null;
        }
    
        if (slugs[0] === ':') {
            throw new Error("Invalid slug: Root path cannot begin with ':'");
        }
    
        let target = this.target();
        let depth = 0;
    
        while (depth < slugs.length) {
            const nav = target.nav;
            const content = nav.getContent();
            let found = false;
    
            for (const child of content) {
                if (slugs[depth] === child.name) {
                    if (depth === slugs.length - 1) {
                        return child;
                    }
    
                    target = child;
                    found = true;
                    depth++;
                    break;
                }
            }
    
            if (!found) {
                return null;
            }
        }
    
        return null;
    }
}

export default SlugBase;