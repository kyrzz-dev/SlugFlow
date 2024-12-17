import SlugSource from "./source";
import SlugState from "../slugState";
import SlugFormat from "../util/slugFormat";

abstract class SlugBase {
    protected abstract target() : SlugState;

    public slug(src : SlugSource) : SlugState {
        const slugs : string[] = SlugFormat.toSlugs(src)

        if (slugs.length === 0) {
            throw new Error();
        }
    
        if (slugs[0] === ':') {
            throw new Error("Invalid slug: Root path cannot begin with ':'");
        }
     
        let target = this.target();
        let index = 0;
    
        while (index < slugs.length) {
            const name = slugs[index];
            const nav = target.nav;
            const pool = nav.pool;

            let found = false;
            let last = index === (slugs.length - 1);
    
            for (const child of pool) {
                if (name === child.name) {
                    if (last) {
                        return child;
                    }
    
                    target = child;
                    found = true;
                    index++;
                    break;
                }
            }
    
            if(found) {
                continue;
            }

            if(last) {
                return nav.content(name);
            }

            break;
        }

        throw new Error("There should be no gaps in hierarchy");
    }
}

export default SlugBase;