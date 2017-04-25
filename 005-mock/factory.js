const factory = (logger) => {
  const collection = [];

  const push = (data) => {
    logger.info('before');
    collection.push(data);
    logger.info('after');
  };

  return {
    collection,
    push
  };
};

module.exports = factory;
