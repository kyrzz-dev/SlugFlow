import dummy from '../examples/config/dummy';
import SlugFlow from "../lib/slugFlow";
import SlugState from "../lib/slugState";

const flow = SlugFlow.defineFlow("build-content.com", dummy);

const root = flow.root;
test("should not be called manually", () =>{        
    expect(() => SlugState.buildContent(flow.root)).toThrow(); 
})

const nav = root.nav;
test("should be empty if not builded yet", () =>{  
    expect(nav.content).toEqual([]); 
})

test("should build it with getContent", () =>{
    expect(nav.getContent()).not.toEqual([]);
})