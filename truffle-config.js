const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      network_id: "*",
      host: "127.0.0.1"
    },
    ganache: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", MetaMaskAccountIndex )
      },
      // host: "localhost",
      // port: 7545,
      network_id: 5777 // match any network
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/37c89d5b88f04829a1bf1e9ca04e5048", MetaMaskAccountIndex)
      },
      network_id: 3
    },
  },
  compilers: {    
    solc: {
      version: "0.7.5"
    }
  }
};
