const getRegistryInfo = require('./graphql');

test('pink-pineapple registry info', async () => {
  const data = await getRegistryInfo();
  const copy = Object.assign({}, data);
  const { ocVersion, ...rest } = copy.registry;
  copy.registry = rest;
  expect(copy).toMatchSnapshot();
});
