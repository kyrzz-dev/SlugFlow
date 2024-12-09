import SlugFlow from '../lib/slugFlow';
import { SlugConfig } from '../lib/slug/config';
import { kyrzzRoot, slugflowRoot } from './flowRoots';

let test : SlugFlow;
let kyrzz : SlugFlow;
let slugflow : SlugFlow;

describe("Creating instance", () =>{
  it('should create specified flows to cache', () => {
    test = SlugFlow.Create({ });
    kyrzz = SlugFlow.Create(kyrzzRoot);
    slugflow = SlugFlow.Create(slugflowRoot);
  });
});

describe("Defining by domain", () =>{
  SlugFlow.Clear();

  it('should work with proper domains', () => {
    SlugFlow.Define("kyrzz.com", kyrzz);
    SlugFlow.Define("slugconfig.com", slugflow);
  });

  it('should throw when domain already exists', () => {
    expect(() => {SlugFlow.Define("kyrzz.com", test)}).toThrow();
  });

  it('should throw when domain is empty', () => {
    expect(() => {SlugFlow.Define("", test)}).toThrow();
  });
});