const { getDockerIPV4_URL } = require('./get-container.host');
const { getRemoteURL } = require('./get-remote.url');
const { logger } = require('./logger');

module.exports = {
  getRemoteURL,
  logger,
  getDockerIPV4_URL,
};
