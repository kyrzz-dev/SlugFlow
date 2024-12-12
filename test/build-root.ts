import dummy from '../examples/config/dummy';
import SlugFlow from "../lib/slugFlow";
import SlugState from "../lib/slugState"

const flow = SlugFlow.defineFlow("build-root.com", dummy);

const state = flow.root;

describe("Root build", () =>{
    it("should not be called manually", () =>{
        expect(() => SlugState.buildRoot(dummy, flow)).toThrow();
    })

    it("should have equal values", () =>{
        expect(state.config).toEqual(dummy);
        expect(state.flow).toEqual(flow);

    })
    it("should have same or different references", () =>{
        expect(() => expect(state.config).toBe(dummy)).toThrow();
        expect(state.flow).toBe(flow);
    })
})