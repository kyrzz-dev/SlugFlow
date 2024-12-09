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
        expect(state.name).toEqual("");
        expect(state.depth).toEqual(-1);
        expect(state.source).toEqual([]);
        expect(state.data).toEqual(fillData(root));
    })
})