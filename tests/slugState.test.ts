import SlugConfig from "../lib/slug/config";
import SlugFlow from "../lib/slugFlow";
import SlugState from "../lib/slugState"

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

describe("Root building", () =>{
    const config : SlugConfig = { layout: "build-root", access: "state" }
    const flow = SlugFlow.defineFlow("build-root.com", config);

    it("should not be called manually", () =>{
        expect(() => SlugState.buildRoot(config, flow)).toThrow();
    })

    const state = flow.state;

    it("should have equal values", () =>{
        expect(state.config).toEqual(config);
        expect(state.flow).toEqual(flow);

    })
    it("should have same or different references", () =>{
        expect(() => expect(state.config).toBe(config)).toThrow();
        expect(state.flow).toBe(flow);
    })
})