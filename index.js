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

function distanceTravelledInFeet() {
  
}