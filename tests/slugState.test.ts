import SlugConfig from "../lib/slug/config";
import SlugState from "../lib/slugState"
import { fillData } from "../lib/util/data";

const root : SlugConfig = {
    layout : "basis",
    sub: {
        "1" : {

        },
        "2" : {
            layout : "sidebar"
        },
        "3" : {
            
        }
    }
}

describe("Basic Construction", () =>{
    const state = SlugState.Build(root);

    it("should be at default root values", () =>{
        const source = state.source;
        expect(source.name).toEqual("");

        const hierarchy = state.hierarchy;
        expect(hierarchy.depth).toEqual(-1);
        expect(hierarchy.getSource()).toEqual([]);

        const data = state.data;
        expect(data.cloneCurrent()).toEqual(fillData(root));
    })
})