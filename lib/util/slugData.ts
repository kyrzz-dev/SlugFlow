import SlugData, { SharedData, LocalData } from "../slug/data";

function sharedClone(target: SharedData, source?: SharedData) : SharedData {
    if(source) {
        return {
            layout: target.layout ? target.layout : source.layout,
            access: target.access ? target.access : source.access,
            meta: target.meta ? target.meta : source.meta,
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