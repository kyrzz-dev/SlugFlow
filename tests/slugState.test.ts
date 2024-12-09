import SlugConfig from "../lib/slug/config";
import SlugState from "../lib/slugState"
import { fillData } from "../lib/util/data";

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

        test("name should be equal to empty", () =>{
            expect(state.name).toEqual("");
        }) 

        test("depth should be equal to -1", () =>{
            expect(state.depth).toEqual(-1);
        }) 

        test("source should be equal to empty", () =>{
            expect(state.source).toEqual([]);
        }) 

        test("data should be equal to root config", () =>{
            expect(state.data).toEqual(fillData(config));
        });


        test("child", () =>{

        });

    })
})