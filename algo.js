// 226. Invery Binary Tree



// Given the Root of a binary tree, invert the tree, and return its root.









/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    

    if(root == null){
        return root
    }

    invertTree(root.left)

    invertTree(root.right)

    const curr = root.left
    root.left = root.right
    root.right = curr

    return root
};