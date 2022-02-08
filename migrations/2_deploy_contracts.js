const PX = artifacts.require("PropertyExchange");

module.exports = function(deployer, network) {
  if (network === "rinkeby") {
    /* if deployed on rinkeby */
    deployer.deploy(PX, {
      from: "0xCc6204e831fc50cAE4c3cb6fa933fD7Ded485bD0"
    });
  } else {
    /* if deployed on ganache */
    deployer.deploy(PX);
  }
};
// 0x1F40F47B0bfe1Ef5a53Fb4092907FdB3cA498719
