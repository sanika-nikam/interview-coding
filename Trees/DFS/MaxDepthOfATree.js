/**
 * The max depth of a binary tree is the longest root-to-leaf path. Given a binary tree, find its max depth.

 */

const findMaxDepthOfABinaryTree = (root) => {
    if(root === null) {
        return null;
    }

    const maXDepthHelper = (node, depthSoFar) => {
        if(node === null) {
            return depthSoFar
        }


        const leftHeight = node.left ? maXDepthHelper(node.left, depthSoFar + 1) : depthSoFar;
        const rightHeight = node.right ? maXDepthHelper(node.right, depthSoFar + 1): depthSoFar;

        return Math.max(leftHeight, rightHeight);
    }

    return maXDepthHelper(root, 0) + 1;
    
}
