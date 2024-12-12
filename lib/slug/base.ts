import SlugSource from "./source";
import SlugState from "../slugState";
import { toSlugs } from "../util/slugFormat";

abstract class SlugBase {

    protected abstract target() : SlugState;

}

export default SlugBase;