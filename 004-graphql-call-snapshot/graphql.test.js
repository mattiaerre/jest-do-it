const getRegistryInfo = require('./graphql');

test('pink-pineapple registry info', async () => {
  const data = await getRegistryInfo();
  expect(data).toMatchSnapshot();
});
