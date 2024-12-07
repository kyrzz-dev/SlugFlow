import SlugFlow from '../../lib/slug/flow';
import { SlugConfig } from '../../lib/slug/config';

const config: SlugConfig = { };

it('should throw an exception when domain variable in create parameter is left empty', () => {
  expect(() => {SlugFlow.Create("", config)}).toThrow();
});
/*it('should to add the flow with the specified domain to the cache.', () => {
  SlugFlow.Create("", config)
});*/
it('should throw an exception when domain already exists', () => {
  SlugFlow.Create("test", config);
  expect(() => {SlugFlow.Create("test", config)}).toThrow();
});