import { omit } from "lodash";
import SlugConfig from "../slug/config";
import SlugData, { SharedData, LocalData } from "../slug/data";

function configToData(config : SlugConfig){
    return omit(config, 'sub');
}

function fillShared(target: SharedData, source?: SharedData) : SharedData {
    if(source) {
        return {
            layout: source.layout ? source.layout : target.layout,
            access: source.access ? source.access : target.access,
            meta: source.meta ? source.meta : target.meta,
        };
    }
    else{
        return {
            layout: target.layout,
            access: target.access,
            meta: target.meta,
        };
    }
}

function fillLocal(target: LocalData) : LocalData {
    return {
        memoLast: target.memoLast,
        memoDefault : target.memoDefault,
    }
}

function fillData(target: SlugData, source? : SlugData): SlugData {
    const sharedData = fillShared(target, source);
    const localData = fillLocal(target);

    return {
        ...sharedData,
        ...localData
    }
}


export { configToData, fillShared, fillLocal, fillData }