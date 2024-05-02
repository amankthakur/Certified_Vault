module.exports = {
  networks: {
    development: {
      // host: "127.0.0.1",
      host: "ganache",
      port: 8545,
      network_id: "*",
    },
  },  
    compilers: {
      solc: {
        versions: "0.8.13",
      },
    },
  };