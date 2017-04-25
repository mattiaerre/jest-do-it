const fetch = require('node-fetch');

const getById = (id) => {
  return fetch(`http://swapi.co/api/people/${id}`)
    .then(response => response.json())
    .then(data => data);
};

module.exports = getById;
