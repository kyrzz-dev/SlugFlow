import SlugConfig from "../lib/slug/config";
import SlugState from "../lib/slugState"

const config : SlugConfig = {
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

describe("Build", () =>{
    const state = SlugState.Build(config);

    describe("root", () =>{

        describe("name", () =>{
            it("should be empty", () =>{
                expect(state.name).toEqual("");
            }) 
        });

        describe("config", () =>{       
            it("should match with root config", () =>{
                expect(state.config).toEqual(config);
            })
        });

        describe("data", () =>{
            it("should be same with root config's data", () =>{
                expect(state.display).toEqual(config);
            }) 
        });

        describe("depth", () =>{
            it("should be -1", () =>{
                expect(state.depth).toEqual(-1);
            }) 
        });

        describe("source", () =>{
            it("should be empty", () =>{
                expect(state.source).toEqual([]);
            }) 
        });
    })
})