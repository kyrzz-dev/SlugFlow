import SlugData, { SharedData, LocalData } from "../slug/data";

export function buildData(parent: SlugData | null, target: SlugData): SlugData {
    if(parent){
        const sharedData : SharedData = {
            layout: parent.layout ? parent.layout : target.layout,
            access: parent.access ? parent.access : target.access,
            meta: parent.meta ? parent.meta : target.meta,
        };
    
        const localData : LocalData = {
            memoLast: target.memoLast,
            memoDefault : target.memoDefault,
        };
    
        return { ...sharedData, ...localData }
    }
    else{
        return {
            layout: target.layout,
            access: target.access,
            meta: target.meta,
            
            memoLast: target.memoLast,
            memoDefault : target.memoDefault,
        }
    }
}