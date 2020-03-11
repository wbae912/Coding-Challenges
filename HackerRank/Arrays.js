/* eslint-disable no-console */

// 2D Array - DS (Hourglass)
function hourglassSum(arr) {
  let rows = arr.length; // 6
  let columns = arr[0].length; // 6

  let maxSum = Number.NEGATIVE_INFINITY; // To solve this at best case, we need to get the MIN value, since the array can have negative numbers...Therefore, we initialize to -Infinity

  // Loop through the 2D array
  for(let i = 0; i < rows - 2; i++) { // We subtract rows by 2 because the hourglass only has 3 indeces of ROWS
    for(let j = 0; j < columns - 2; j++) { // We subtract columns by 2 because the hourglass only has 3 indeces of COLUMNS
      let sum = 0;

      //Let's sum up the top of the hourglass...
      sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

      //Let's add on the middle of the hourglass...
      sum += arr[i + 1][j + 1];

      //Last, add the bottom of the hourglass...
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// console.log(hourglassSum([
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ]));


// Arrays: Left Rotation
function rotLeft(arr, rotations) {
  //Work it like a queue...shift and then push to the back...

  while(rotations > 0) {
    let firstOut = arr.shift();
    arr.push(firstOut);

    rotations--;
  }
  return arr.join(' ');
}
// BETTER SOLUTION: return arr.concat(arr.splice(0, rotations));
// console.log(rotLeft([1,2,3,4,5], 4));


