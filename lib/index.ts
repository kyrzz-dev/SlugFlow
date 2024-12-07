import { defineFlow } from "./slug/flow";

function exampleFlow(){
    console.log(defineFlow({
        layout : "basis",
        sub : {
            "about": {
                layout: "simple"
            },
            "contact": {

            }
        }
    }));
}


export { exampleFlow, defineFlow }