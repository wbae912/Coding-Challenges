function containsDuplicate(nums) {
  let obj = {};

  for(let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;

    if(obj[nums[i]] > 1) {
      return true;
    }
  }
  return false;
}

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));


function productExceptSelf(nums) {
  let result = [];
  let product = 1;

  //Array that goes left to right
  for(let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }

  product = 1;

  //Array that goes from right to left
  for(let j = nums.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= nums[j];
  }

  return result;
}

/* Same function in O(n^2)
function productExceptSelf(nums) {
  let result = [];
  let product = 1;

  for(let i = 0; i < nums.length; i++) {
    product *= nums[i];
    for(let j = 0; j < nums.length; j++) {
      result[j] = product / nums[j]
    }
  }
  return result;
}
*/

// console.log(productExceptSelf([1,2,3,4]));


//Camel Case [EASY CoderByte question]

//Letter Count [MEDIUM CoderByte question]
function letterCount(str) {
  let array = str.toLowerCase().split(' ');
  let index = 0;
  let maxCount = 0;

  for(let i = 0; i < array.length; i++) {
    let word = array[i].split('').sort();
    let count = 0;
    for(let j = 0; j < word.length; j++) {
      if(word[j] === word[j + 1]) {
        count++;
      }
    }
    if(count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  return array[index];
}

// console.log(letterCount('Today, is the greatest day ever!'));

//Run Length Encoding [MEDIUM CoderByte question]
function runLength(input) {
  let count = 1;
  let result = [];
  let prevLetter = input[0];

  for(let i = 1; i < input.length; i++) {
    if(input[i] !== prevLetter) {
      result.push(count.toString() + prevLetter);
      count = 1;
      prevLetter = input[i];
    } else {
      count++;
    }
  }
  result.push(count.toString() + prevLetter);
  return result.join('');
}

// console.log(runLength('wwwbbbw'));

//Word Split/Break [MEDIUM CoderByte question]
function WordSplit(strArr) { 

  let dictionaryArray = strArr[1].split(',');

  let targetWord = strArr[0];
  let firstLetter = '';
  let combinations = [];

  for(let i = 0; i < targetWord.length - 1; i++) {
    combinations.push(firstLetter += targetWord[i], targetWord.slice(i + 1));
  }

  let matchingWords = [];
  for(let j = 0; j < combinations.length; j++) {
    for(let k = 0; k < dictionaryArray.length; k++) {
      if(combinations[j] === dictionaryArray[k]) {
        matchingWords.push(dictionaryArray[k]);
      }
    }
  }

  for(let l = 0; l < matchingWords.length; l++) {
    for(let m = l + 1; m < matchingWords.length; m++) {
      if(matchingWords[l].length + matchingWords[m].length === targetWord.length) {
        if(matchingWords[m].startsWith(matchingWords[l]) === false) {
          return `${matchingWords[l]},${matchingWords[m]}`;
        }
      }
    }
  }
  return 'not possible';
}
   
// console.log(WordSplit(['baseball', 'a,all,b,ball,bas,base,cat,code,d,e,quit,z']));
// console.log(WordSplit(['abcgefd', 'a,ab,abc,abcg,b,c,dog,e,efd,zzzz']));

function findMin(nums) {
  // If the problem is dealing with a sorted array, we will almost always use BST
  
  let left = 0;
  let right = nums.length - 1;
  
  while(left < right) {
    let midpoint = Math.floor(right / 2);
      
    if(midpoint > 0 && nums[midpoint] < nums[midpoint - 1]) {
      return nums[midpoint];
    } else if(nums[left] <= nums[midpoint] && nums[midpoint] > nums[right]) {
      midpoint = midpoint + 1;
    } else {
      midpoint = midpoint - 1;
    }
    left = midpoint;
  }
  
  
  return nums[left];
}
// console.log(findMin([3,4,5,1,2]));

function moveZeroes(nums) {
  nums.sort((a,b) => a - b);
  
  let index = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      index = i;
    }
  }
  let concat = nums.splice(0, index + 1);

  return nums.concat(concat);
}
// console.log(moveZeroes([0,1,0,3,12]));

function rotateArray(nums, k) {
  let splicedArray = nums.splice(nums.length - k, k);
    
  nums.unshift(...splicedArray);

  return nums;
}
// console.log(rotateArray([1,2,3,4,5,6,7], 3));