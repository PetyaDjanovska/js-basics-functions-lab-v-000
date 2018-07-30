// Code your solution in this file!
function distanceFromHqInBlocks(input) {
  distance = Math.abs(42 - input);
  return distance;
}

function distanceFromHqInFeet(input) {
  let blocks = distanceFromHqInBlocks(input);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  let blocks = Math.abs(end - start) 
}
