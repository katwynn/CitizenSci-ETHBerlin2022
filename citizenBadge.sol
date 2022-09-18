// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol"; //library by Azuki to optimize gas consumption of ERC721A

contract citizenbadge is ERC721A{ 
    
    event badgeminted(address sender, uint256 quantity);

    constructor(string memory name, string memory symbol) 
        //passing to parent contract the variables from constructor
        ERC721A (name, symbol) {}

    function mint(uint256 quantity) external payable { 
            _mint(msg.sender, quantity);
            emit badgeminted(msg.sender, quantity);
    }
}
//contract deployed at 0x2dd6Fb833144BE26419306A7B1E8b29D50cf44A3 (mumbai polygon)
