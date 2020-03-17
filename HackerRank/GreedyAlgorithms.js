function minimumAbsoluteDifference(arr) {
  let minDifference = Infinity;

  let sortedArray = arr.sort((a,b) => a - b);

  for(let i = 0; i < sortedArray.length - 1; i++) {
    let currentDifference = Math.abs(arr[i] - arr[i + 1]);
    
    minDifference = Math.min(currentDifference, minDifference);
  }
  return minDifference;
}
// console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]));
