import SlugConfig from "../../lib/slug/config";

const dummy : SlugConfig = {
    layout: "basis",
    access: "public",
    meta: { description: "Dummy config to test all cases" },
    memoLast: true,
    memoDefault: true,

    sub: {
        "100" : {
            //layout: "test",
            //access : "dev",
            //meta: { title: "Dummy Test", description: "All situations testing" },
            
            //memoLast: true,
            //memoDefault: false
        },
        "101" : {
            layout: "test",
            access : "dev",
            meta: { title: "Dummy Test", description: "All situations testing" },
            
            //memoLast: true,
            //memoDefault: false
        },
        "102" : {
            //layout: "test",
            //access : "dev",
            //meta: { title: "Dummy Test", description: "All situations testing" },
            
            memoLast: true,
            memoDefault: false
        },
        "103" : {
            layout: "test",
            access : "dev",
            meta: { title: "Dummy Test", description: "All situations testing" },
            
            memoLast: true,
            memoDefault: false
        },
        "104" : {
            layout: "test",
            //access : "dev",
            meta: { title: "Dummy Test", description: "All situations testing" },
            
            memoLast: true,
            //memoDefault: false
        },

        "200" : {

        },

        "201" : {
            sub: {

            }
        },

        "202" : {
            sub: {
                "a" : {

                },
                "b" : {

                },
                "c" : {

                }
            }
        },

        "203" : {
            sub: {
                "a" : {
                    sub: {
                        "b" : {
                            sub: {
                                "c" : {
                
                                }
                            }
                        }
                    }
                }
            }
        },

        "300" : {

        },

        "301" : {
            pattern: {

            }
        }
    }
}

export default dummy;