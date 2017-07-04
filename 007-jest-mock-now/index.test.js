const now = require('jest-mock-now'); // eslint-disable-line import/no-extraneous-dependencies

test('jest-mock-now', () => {
  now();

  expect(Date.now()).toBe(new Date('2016-11-18').getTime());
});
