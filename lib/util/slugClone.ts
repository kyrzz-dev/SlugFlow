import SlugData, { SharedData, LocalData } from "../slug/data";

class SlugClone {
    public static sharedData(target: SharedData, source?: SharedData) : SharedData {
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
    
    public static localData(target: LocalData) : LocalData {
        return {
            memoLast: target.memoLast,
            memoDefault : target.memoDefault,
        }
    }
    
    public static slugData(target : SlugData, source? : SlugData) : SlugData {
        return {
            ...SlugClone.sharedData(target, source),
            ...SlugClone.localData(target)
        }
    }    
}


export default SlugClone;