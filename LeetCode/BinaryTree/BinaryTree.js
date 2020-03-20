/*
TIPS for BST:

  1. Most problems will involve creating a second function that is returned recursively
  2. Searching through binary search trees will often use recursion
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