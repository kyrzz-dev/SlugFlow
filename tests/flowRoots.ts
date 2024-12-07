import SlugConfig from "../lib/slug/config";

export const kyrzzRoot : SlugConfig = 
{ 
  layout: "basis",
  sub: {

    "about" : {
      meta: { 
        "en" : { title : "About us" },
        "tr" : { title : "Hakkımızda" },
        "de" : { title : "Über uns" }
      }
    },

    "contact" : {
      meta: {
        "en" : { title : "Contact us" },
        "tr" : { title : "Bize ulaşın" },
        "de" : { title : "Kontaktieren Sie uns" }
      }
    },

    "samples" : {
        layout: "sidebar",
        memoLast: true,
        sub: {

            "introduction" : {
                memoDefault: true
            },

            "currency" : {

            },
        }
    }
  }
};

export const slugflowRoot : SlugConfig = {
    layout : "basis",
    sub: {
        "docs": {
            
        }
    }
}