import SlugFlow from '../lib/slugFlow';
import SlugConfig from '../lib/slug/config';

const kyrzzConfig : SlugConfig = {
  layout: "basis",

  sub: {
    "about" : {
      
    },
    "contact" : {

    },
    "projects" : {
      layout: "sidebar",
      meta: { title: "Projects - Kyrzz" },

      sub: {
        "examples": {

        }
      }
    }
  }
}

const kyrzz = SlugFlow.defineFlow("kyrzz.com", kyrzzConfig);
const slugflow =SlugFlow.defineFlow("slugflow.com", {});

describe("Define Flow", () =>{
  it("should throw when domain already exists", () =>{
    expect(() => SlugFlow.defineFlow("kyrzz.com", {})).toThrow();
    expect(() => SlugFlow.defineFlow("slugflow.com", {})).toThrow();
  });

  it("should throw when domain is empty", () =>{
    expect(() => SlugFlow.defineFlow("", {})).toThrow();
  });
})

describe('first', () => {
  it("B", () =>{
    //kyrzz.slug();
  });
})