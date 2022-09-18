// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract verfication {

enum voterStatus { ABSTENT, FALSE, TRUE}

mapping (string => mapping(address => voterStatus)) public projectData; 

function verify(string memory cid, voterStatus vote) public { 
    projectData[cid][msg.sender] = vote; 
    }
}

//0x83dc26C259E6d17671137F9ED0CDc1D42aC91eed contract address on mumbai polygon
