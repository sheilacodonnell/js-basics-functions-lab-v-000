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

function distanceTravelledInFeet(start, destination) {
  feetDistance = Math.abs(start - destination) * 264
  return feetDistance
}

function calculatesFarePrice(start, destination) {
  
}