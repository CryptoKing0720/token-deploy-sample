const { vars } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "holesky",
  solidity: {
    compilers: [{ version: "0.4.17" }],
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
  networks: {
    holesky: {
      chainId: 17000,
      url: vars.get(
        "ETH_HOLESKY_TESTNET_URL",
        `https://holesky.rpc.thirdweb.com/`
      ),
      accounts: [
        "bd83a05798e1e8b965076e29c74b4d294020a262770d6dd142a172f687e331e7",
      ],
    },
  },
  etherscan: {
    apiKey: {
      holesky: ETHERSCAN_API_KEY,
    },
  },
  paths: {
    sources: "./contracts",
  },
  customChains: [
    {
      network: "holesky",
      chainId: 17000,
      urls: {
        apiURL: "https://api-holesky.etherscan.io/api",
        browserURL: "https://holesky.etherscan.io",
      },
    },
  ],
};
