const Docker = require('dockerode');
const docker = new Docker();

async function getContainerIPv4(containerName) {
  try {
    // Get the container object
    const container = docker.getContainer(containerName);

    // Inspect the container to get detailed information
    const data = await container.inspect();

    // Extract the IPv4 address from the network settings
    const networks = data.NetworkSettings.Networks;
    for (const networkName in networks) {
      if (networks[networkName].IPAddress) {
        return networks[networkName].IPAddress;
      }
    }

    throw new Error('No IPv4 address found');
  } catch (error) {
    console.error('Error:', error);
  }
}

function getDockerIPV4_URL() {
  // Replace 'your_container_name_or_id' with the actual name or ID of your container
  getContainerIPv4('your_container_name_or_id').then((ipv4) => {
    console.log('Container IPv4 address:', ipv4);
    return ipv4;
  });
}

module.exports = {
  getDockerIPV4_URL,
};
