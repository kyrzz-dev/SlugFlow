import SlugConfig from "../slug/config"
import SlugState from "../slugState";

type StateProps = {
    name : string;
    config : SlugConfig;
    parent? : SlugState;
}

export default StateProps;