const http = require('http');
const https = require('https');
const { getDockerIPV4_URL } = require('./get-container.host');

class urlBuilder {
  constructor(ports, path, name, git) {
    this.ports = ports;
    this.path = path.startsWith('/') ? path : '/' + path;
    this.hosts = [
      'http://localhost',
      'http://192.168.239.16',
      getDockerIPV4_URL(name),
      `${git}/ui/${name}/dist`,
      // Add more hosts as needed
    ];
  }

  async findFirstSuccessfulHost() {
    // Mark as async
    for (let port of this.ports) {
      for (let host of this.hosts) {
        const url = `${host}:${port}${this.path}`;
        try {
          const response = await this.makeRequest(url); // Await the promise
          if (response.statusCode === 200) {
            // Check response status
            console.log(`Successful response from ${url}`);
            return { host, port, path: this.path };
          }
        } catch (error) {
          console.error(`Error requesting ${url}`, error);
        }
      }
    }

    console.log('No host returned a 200 status code.');
    return null;
  }

  makeRequest(url) {
    return new Promise((resolve, reject) => {
      const lib = url.startsWith('https') ? https : http;
      const request = lib.get(url, (response) => {
        resolve(response);
      });
      request.on('error', (error) => {
        reject(error);
      });
      request.end();
    });
  }
}

async function getRemoteURL(ports, path, pkg) {
  const { name, version, repository } = pkg;
  // Mark as async
  const remoteURLInstance = new urlBuilder(
    ports,
    path,
    name,
    repository['url']
  );
  try {
    const result = await remoteURLInstance.findFirstSuccessfulHost(); // Await here

    if (result) {
      const fullUrl = `${result.host}:${result.port}${result.path}`;
      console.log(`First successful host: ${fullUrl}`);
      return fullUrl;
    } else {
      console.log('No successful host found.');
      return null;
    }
  } catch (error) {
    console.error('Error finding remote URL:', error);
    return null;
  }
}

module.exports = {
  getRemoteURL,
};
