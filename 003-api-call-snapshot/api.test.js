const getById = require('./api');

const scenarios = [
  {
    name: 'Luke Skywalker',
    id: 1
  },
  {
    name: 'Darth Vader',
    id: 4
  }
];

scenarios.forEach((scenario) => {
  test(scenario.name, async () => {
    const data = await getById(scenario.id);
    expect(data).toMatchSnapshot();
  });
});
