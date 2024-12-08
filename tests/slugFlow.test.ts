import SlugFlow from '../lib/slugFlow';
import { SlugConfig } from '../lib/slug/config';
import { kyrzzRoot, slugflowRoot } from './flowRoots';

beforeAll(() =>{
  SlugFlow.Clear();
});

afterEach(() =>{
  SlugFlow.Clear();
})

describe("Add", () =>{
  it('should add specified flows to cache', () => {
    SlugFlow.Add("kyrzz.com", SlugFlow.empty);
    SlugFlow.Add("slugflow.com", SlugFlow.empty);
  });
  it('should throw exception when domain already exists', () => {
    SlugFlow.Add("kyrzz.com", SlugFlow.empty);
    expect(() => {SlugFlow.Add("kyrzz.com", SlugFlow.empty)}).toThrow();
  });
  it('should throw exception when domain is empty', () => {
    expect(() => {SlugFlow.Add("", SlugFlow.empty)}).toThrow();
  });
});

describe("Create", () =>{
  it('should create specified flows to cache', () => {
    SlugFlow.Create("kyrzz.com", kyrzzRoot);
    SlugFlow.Create("slugflow.com", slugflowRoot);
  });
  it('should throw exception when domain already exists', () => {
    SlugFlow.Create("kyrzz.com", kyrzzRoot);
    expect(() => {SlugFlow.Create("kyrzz.com", kyrzzRoot)}).toThrow();
  });
  it('should throw exception when domain is empty', () => {
    expect(() => {SlugFlow.Create("", kyrzzRoot)}).toThrow();
  });
  it('should return flow and root should be the same', () => {
    const flow = SlugFlow.Create("kyrzz.com", kyrzzRoot);
    expect(flow).toBeInstanceOf(SlugFlow);
    expect(flow.root).toBe(kyrzzRoot);
  });
});