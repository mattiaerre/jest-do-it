const sum = require('./sum');

test('2 + 2 = 4', () => {
  const result = sum(2, 2);

  expect(result).toMatchSnapshot();
});
