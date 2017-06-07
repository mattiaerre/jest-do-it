const validate = require('./validate');

test('req is valid', () => {
  const req = {
    user: {
      name: 'john.doe@example.com'
    },
    token: '6901406e-bd3e-472b-b0f2-d4aaa250f17e'
  };

  expect(validate(req)).toBe(true);
});

test('req is not valid', () => {
  const req = {
    user: {
      name: 'john.doe@example.com'
    }
  };

  expect(() => { validate(req); }).toThrowErrorMatchingSnapshot();
});
