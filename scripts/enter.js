const { ethers } = require("hardhat")

async function joinLottery() {
    const lottery = await ethers.getContract("Lottery")
    const entranceFee = await lottery.getEntranceFee()
    await lottery.joinLottery({ value: entranceFee + 1 })
    console.log("Entered!")
}

joinLottery()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
