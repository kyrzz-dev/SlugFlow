import dummy from '../examples/config/dummy';
import SlugFlow from '../lib/slugFlow';

SlugFlow.defineFlow("define-flow.com", dummy);

it("should throw when domain already exists", () =>{
  expect(() => SlugFlow.defineFlow("define-flow.com", {})).toThrow();
  expect(() => SlugFlow.defineFlow("define-flow.com", dummy)).toThrow();
});

it("should throw when domain is empty", () =>{
  expect(() => SlugFlow.defineFlow("", {})).toThrow();
  expect(() => SlugFlow.defineFlow("", dummy)).toThrow();
});