import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'


describe('hello word', function() {
  it('should say hi', async function() {
    // 1. setup
    // 2. deploy contract
    // 3. call our function to test

    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    expect(await hello.hello()).to.equal('Hello world!')
  })
})
