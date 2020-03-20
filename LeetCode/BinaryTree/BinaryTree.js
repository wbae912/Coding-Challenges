/*
TIPS for BST:

  1. Most problems will involve creating a second function that is returned recursively
  2. Searching through binary search trees will often use recursion
  3. Most of the time will need an edge case if the tree DOES NOT EXIST

*/


// 101. Symmetric Tree (Easy)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // Edge Case (If we have no tree, it is essentially symmetric):
  if(root === null) return true;

  return isMirror(root.left, root.right);
};

var isMirror = function(leftSubtree, rightSubtree) {
  // Base Case (The tree does not have any left or right nodes. The parent node alone is symmetric):
  if(leftSubtree === null && rightSubtree === null) {
    return true;
  }
  
  // Recursive Case (Both left and right subtrees exist)
  if(leftSubtree !== null && rightSubtree !== null) {
    if(leftSubtree.val === rightSubtree.val) {
      return isMirror(leftSubtree.left, rightSubtree.right) && isMirror(leftSubtree.right, rightSubtree.left);
    }
  }

  // If one subtree exists, but the other does not then obviously it is not symmetric so we through false.
  // If both subtrees exist, but the values do NOT match, then obviously it is not symmetric
  return false;
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 104. Max Depth of Binary Tree (Easy)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let leftCounter = 0;
  let rightCounter = 0;

  // Edge Case (Tree does not exist):
  if(root === null) {
    return 0;
  }

  // Base Case (Tree reaches the bottom node):
  if(root.left === null && root.right === null) {
    leftCounter = 1;
    rightCounter = 1;
  }

  // Recursive Case:
  if(root.left !== null) {
    leftCounter = 1 + maxDepth(root.left);
  }
  if(root.right !== null) {
    rightCounter = 1 + maxDepth(root.right);
  }

  return Math.max(leftCounter, rightCounter);
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 108. Convert Sorted Array to Binary Search Tree (Easy)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // Edge Case (If tree or array does not exist)
  if(nums.length === 0) {
    return null;
  }

  return treeConstructor(nums, 0, nums.length - 1); // We Identify the Left as the leftmost index of nums array. We set Right as the rightmost index of nums array
};

var treeConstructor = function(nums, left, right) { // left and right are INDECES of the nums array
  // Base Case (If the leftmost index has exceeded the rightmost index, we know there are no more nodes to categorize in the tree):
  if(left > right) {
    return null;
  }

  let midpoint = Math.floor((left + right) / 2);

  let root = new TreeNode(nums[midpoint]);

  root.left = treeConstructor(nums, left, midpoint - 1);
  root.right = treeConstructor(nums, midpoint + 1, right);

  return root;
};

// NOTE: In a sorted array, the midpoint is the ROOT. Then, it evaluates the left and right subtrees, and the midpoint is again the ROOT with the left/right nodes attached if present...