/*
  We're going to visit Depth First Search methods. This is still relate to Binary Trees.
  DFS is traversal method for traversing trees.
  There are 3 different kinds of DFS traversals:
    1. Pre-Order Traveral: Root, Left, Right
    2. Post-Order Traversal: Left, Right, Root
    3. In-Order Traversal: Left, Root, Right
  
  DFS looks through a branch of the tree and reaches the BOTTOM before going into another branch. By doing so, it reaches all nodes eventually but goes to the deepest level
  before looking into a new branch, which is why it is known as DEPTH first search.

  Common DFS strategy is to create a Stack data structure.
  While you traverse through the tree, you will loop through the length of the stack add POP visited nodes from the stack and add visiting ones to the Stack.
*/

// 872. Leaf-Similar Trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let leaves1 = [];
  let leaves2 = [];

  depthFirstSearch(root1, leaves1);
  depthFirstSearch(root2, leaves2);

  for(let i = 0; i < leaves1.length; i++) {
    if(leaves1[i] !== leaves2[i]) {
      return false;
    }
  }
  return true;
};

var depthFirstSearch = function(node, leavesArray) {
  if(node !== null) {
    if(node.left === null && node.right === null) { // This is how we know a node is a leaf
      leavesArray.push(node.val);
    }
    depthFirstSearch(node.left, leavesArray);
    depthFirstSearch(node.right, leavesArray);
  }
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 590. N-ary Tree Postorder Traversal
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  let postOrderArray = [];
  let stack = [root];

  if(root === null) {
    return postOrderArray;
  }

  while(stack.length !== 0) {
    let currNode = stack.pop();
    postOrderArray.unshift(currNode.val);
    for(let i = 0; i < currNode.children.length; i++) {
      stack.push(currNode.children[i]);
    }
  }
  return postOrderArray;
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

//589. N-ary Tree Preorder Traversal
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let preOrderArray = [];
  let stack = [];

  if(root === null) {
    return preOrderArray;
  }

  while(stack.length !== 0) {
    let currNode = stack.pop();
    preOrderArray.push(currNode.val);
    for(let i = currNode.children.length - 1; i >= 0; i--) {
      stack.push(currNode.children[i]);
    }
  }
  return preOrderArray;
};