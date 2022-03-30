require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk]
    // },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/560b52a74cbc490fb9dd6f0a4b552255",
      accounts: process.env.PK
    }
  }
};
