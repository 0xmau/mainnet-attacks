require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: __dirname + '/.env' });

const MAINNET_FORK_BLOCK_NUMBER = 25345000;

const COMPILERS = [
  {
    version: '0.8.0',
  }
];

('hardhat/config').HardhatUserConfig 
console.log(`Forking Mainnet Block Height ${MAINNET_FORK_BLOCK_NUMBER}`);
  module.exports = {
    networks: {
      hardhat: {
        forking: {
          url: process.env.FANTOM,
          blockNumber: MAINNET_FORK_BLOCK_NUMBER,
        },
      },
    },
    solidity: {
      compilers: COMPILERS,
    },
  };