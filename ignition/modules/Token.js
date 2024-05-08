const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("TetherToken", [
    1000000000000000,
    "Tether USD",
    "USDT",
    6,
  ]);

  return { token };
});

module.exports = TokenModule;
