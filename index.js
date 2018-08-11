function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    result = blockNumber - 42
  }
  else if (blockNumber < 42) {
    result = 42 - blockNumber
  }
  return result
}

function distanceFromHqInFeet(blockNumber) {
  feetNumber = distanceFromHqInBlocks(blockNumber) * 264
  return feetNumber
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock) {
    feetDistance = (startBlock - endBlock) * 264
  }
  else if (endBlock > startBlock) {
    feetDistance = (endBlock - startBlock) * 264
  }
  return feetDistance
}

function calculatesFarePrice(start, destination)