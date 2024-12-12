import SlugState from "../slugState";

abstract class SlugBase {
    public abstract getContent() : SlugState[];
}

export default SlugBase;