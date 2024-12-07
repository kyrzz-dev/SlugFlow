import SlugConfig from "./config"
import SlugData from "./data"

export type SlugState = {
    config : SlugConfig
    data : SlugData,
    depth : number,
    source : string[]
}

export default SlugState;