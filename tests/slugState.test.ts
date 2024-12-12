import SlugConfig from "../lib/slug/config";
import SlugFlow from "../lib/slugFlow";
import SlugState from "../lib/slugState"

const config : SlugConfig = {
    layout : "basis",
    sub: {
        "child1" : {

        },
        "child2" : {
            layout : "sidebar"
        },
        "child3" : {
            
        }
    }
}

const flow = SlugFlow.defineFlow("build-root.com", config);

const state = flow.root;

describe("Root build", () =>{
    it("should not be called manually", () =>{
        expect(() => SlugState.buildRoot(config, flow)).toThrow();
    })

    it("should have equal values", () =>{
        expect(state.config).toEqual(config);
        expect(state.flow).toEqual(flow);

    })
    it("should have same or different references", () =>{
        expect(() => expect(state.config).toBe(config)).toThrow();
        expect(state.flow).toBe(flow);
    })
})

describe("Content build", () =>{
    it("should not be called manually", () =>{        
        expect(() => SlugState.buildContent(state)).toThrow(); 
    })

    const nav = state.nav;
    it("should be empty if not builded yet", () =>{  
        const content = nav.content;
        expect(content).toEqual([]);
    })

    it("should build it with getContent", () =>{
        const content = nav.getContent();
        expect(()=> expect(content).toEqual([])).toThrow();
    })
})

