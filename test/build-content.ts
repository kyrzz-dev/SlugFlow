import dummy from '../examples/config/dummy';
import SlugFlow from "../lib/slugFlow";
import SlugState from "../lib/slugState";

const flow = SlugFlow.defineFlow("build-content.com", dummy);

const root = flow.root;
it("should not be called manually", () =>{        
    expect(() => SlugState.buildContent(flow.root)).toThrow(); 
})

const nav = root.nav;
it("should be empty if not builded yet", () =>{  
    expect(nav.content).toEqual([]); 
})

it("should build it with getContent", () =>{
    expect(nav.getContent()).not.toEqual([]);
})