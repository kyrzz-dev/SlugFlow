import SlugConfig from "../../lib/slug/config";

const dummy : SlugConfig = {
    layout: "basis",
    access: "public",
    meta: { description: "Dummy config to test all cases" },
    memoLast: true,
    memoDefault: true,

    sub: {
        // empty
        "test1" : {

        },

        // mutation in shared data
        "test2" : {
            layout: "test",
            access: "dev",
            meta: { description: "Mutation in shared data" },
        },

        // mutation in local data
        "test3" : {
            memoLast: true,
            memoDefault: false
        }
    }
}

export default dummy;