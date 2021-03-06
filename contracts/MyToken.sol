// SPDX-License-Identifier: MIT
pragma solidity <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    event MyTokenDeployed(address indexed purchaser);

    constructor(uint256 initialSupply) ERC20("StarDucks Capu-Token", "SCT") {
        _mint(msg.sender, initialSupply);
        _setupDecimals(0);
        MyTokenDeployed(address(this));
    }
}