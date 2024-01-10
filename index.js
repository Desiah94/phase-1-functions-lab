function distanceFromHqInBlocks(location) {
    const hqLocation = 42; // Assuming headquarters location is 42nd street
    return Math.abs(location - hqLocation);
  }
  
  function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // Assuming each block is 264 feet long
    return distanceFromHqInBlocks(location) * blockInFeet;
  }
  
  function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264; // Assuming each block is 264 feet long
    return Math.abs(start - end) * blockInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance <= 2500) {
      return 25; // $25 for a distance over 2000 feet
    } else {
      return "cannot travel that far";
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };