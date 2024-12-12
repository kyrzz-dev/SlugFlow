import dummy from '../examples/config/dummy';
import SlugFlow from "../lib/slugFlow";
import SlugState from "../lib/slugState"

const flow = SlugFlow.defineFlow("build-root.com", dummy);

const state = flow.root;

test("should not be called manually", () =>{
    expect(() => SlugState.buildRoot(dummy, flow)).toThrow();
})

test("should have equal values", () =>{
    expect(state.config).toEqual(dummy);
    expect(state.flow).toEqual(flow);

})

test("should have same or different references", () =>{
    expect(state.config).not.toBe(dummy);
    expect(state.flow).toBe(flow);

})