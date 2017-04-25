const factory = require('./factory');

test('service.push', () => {
  const logger = {
    info: jest.fn()
  };

  const service = factory(logger);

  service.push();
  // service.push({ message: 'TODO' });

  expect(logger.info).toHaveBeenCalled();
  // expect(logger.info.mock.calls).toMatchSnapshot();

  // expect(service.collection.length).toBe(1);
  // expect(service.collection).toMatchSnapshot();
});
