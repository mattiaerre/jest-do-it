const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport('http://pink-pineapple.herokuapp.com/graphql')
});

const getRegistryInfo = () => { // eslint-disable-line arrow-body-style
  return client.query(`{
    registry {
      href
      ocVersion
      type
    }
  }`)
    .then(data => data);
};

module.exports = getRegistryInfo;
