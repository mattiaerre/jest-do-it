const validate = (req) => {
  if (req.token) {
    return true;
  }
  throw new Error('req doesn\'t have a valid token');
};

module.exports = validate;
