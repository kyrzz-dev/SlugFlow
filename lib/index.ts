import { defineFlow } from "./slug/flow";

const myFlow = defineFlow({
    layout : "basis",
    sub : {
        "about": {
            
            meta : {
                "en" : {
                    
                },
                "tr" : {

                },
                "de" : {

                }
            }
        },
        "contact": {

        }
    }
})

function exampleFlow(){
    console.log(myFlow);
}


export { exampleFlow, defineFlow }