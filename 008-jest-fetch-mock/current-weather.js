const fetch = require('node-fetch');

const factory = ({ appid }) => (
  async ({ city }) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;
    const currentWeather = await fetch(url)
      .then(response => (response.json)())
      .then(data => (data));
    return currentWeather;
  }
);

module.exports = factory;
