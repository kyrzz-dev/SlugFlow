import SlugFlow from '../lib/slugFlow';


describe("Define Flow", () =>{
  let kyrzz : SlugFlow;
  let slugflow : SlugFlow;

  it("should work properly with the specified domains", () =>{
    kyrzz = SlugFlow.defineFlow("kyrzz.com", {});
    slugflow =SlugFlow.defineFlow("slugflow.com", {});
  });

  it("should throw when domain already exists", () =>{
    expect(() => SlugFlow.defineFlow("kyrzz.com", {})).toThrow();
    expect(() => SlugFlow.defineFlow("slugflow.com", {})).toThrow();
  });

  it("should throw when domain is empty", () =>{
    expect(() => SlugFlow.defineFlow("", {})).toThrow();
  });
})