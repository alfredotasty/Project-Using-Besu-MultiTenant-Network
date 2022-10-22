//SPDX-Lisens-Identifier: MIT

pragma solidity ^0.8.7;

contract information{
    string name;
    string bloodGroup;
    uint256 age;

     function setName(string memory _name) public{
        name = _name;
    }

    function setBlood(string memory _bloodGroup) public{
        bloodGroup = _bloodGroup;
    }

     function setAge(uint256 _age) public{
        age = _age;
    }

    function getName() public view returns(string memory){
        return name;
    }

    function getBlood() public view returns(string memory){
        return bloodGroup;
    }

    function getAge() public view returns(uint256){
        return age;
    }

}