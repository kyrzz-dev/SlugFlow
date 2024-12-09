import SlugConfig from "../lib/slug/config";
import SlugState from "../lib/slugState"
import { buildData } from "../lib/util/buildData";

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
    describe("root", () =>{
        const state = SlugState.Build(config);

        describe("name", () =>{
            it("should be equal to empty", () =>{
                expect(state.name).toEqual("");
            }) 
        });

        describe("depth", () =>{
            it("should be equal to -1", () =>{
                expect(state.depth).toEqual(-1);
            }) 
        });

        describe("source", () =>{
            it("should be equal to empty", () =>{
                expect(state.source).toEqual([]);
            }) 
        });

        describe("data", () =>{       
            it("should be equal to root config", () =>{
                expect(state.data).toEqual(buildData(null, config));
            })
        });


        describe("child", () =>{

        });

    })
})