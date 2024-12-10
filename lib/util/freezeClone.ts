import { cloneDeep } from "lodash";
import freezeDeep from "./freezeDeep";

function freezeClone<T>(obj: T) : T{
    const clone = cloneDeep(obj);
    freezeDeep(clone);

    return clone;
}

export default freezeClone;