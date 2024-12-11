import SlugData, { SharedData, LocalData } from "../slug/data";

function sharedClone(target: SharedData, source?: SharedData) : SharedData {
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

function localClone(target: LocalData) : LocalData {
    return {
        memoLast: target.memoLast,
        memoDefault : target.memoDefault,
    }
}

function dataClone(target : SlugData, source? : SlugData) : SlugData {
    return {
        ...sharedClone(target, source),
        ...localClone(target)
    }
}



export { dataClone, sharedClone, localClone }