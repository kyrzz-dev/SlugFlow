import SlugFlow from "./slugFlow";

const myFlow = SlugFlow.Create(location.hostname, {
    layout : "basis",
    sub : {
        "about": {

        },
        "contact": {

        },
        "projects": {

        }
    }
})

function exampleFlow(){
    console.log(myFlow);
}


export { exampleFlow, SlugFlow }