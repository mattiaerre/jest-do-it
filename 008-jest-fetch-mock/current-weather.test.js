const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);
const factory = require('./current-weather');

describe('current-weather', () => {
  const config = { appid: 'appid' };
  const currentWeather = factory(config);

  test('currentWeather()', async () => {
    const weather = { temperature: '25.17 °C' };
    fetch.mockResponse(JSON.stringify(weather));

    const current = await currentWeather({ city: 'London' });

    expect(current).toEqual(weather);
    expect(current).toMatchSnapshot();
  });

  test('fetch', () => {
    expect(fetch).toHaveBeenCalled();
    expect(fetch.mock.calls).toMatchSnapshot();
  });
});
