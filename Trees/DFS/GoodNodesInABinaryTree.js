// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

var goodNodes = function(root) {
    const goodNodesHelper = (node, visited) => {
        if(node === null) {
            return visited;
        }
        
        if(node.val >= root.val) {
            visited.push(node.val);
        }
        
        if(node.left) {
            goodNodesHelper(node.left, visited)
        }
        
        if(node.right){
            goodNodesHelper(node.right, visited)
        }
        return visited.length;

    }
    
    if(root === null) {
        return 0;
    }
    
    return goodNodesHelper(root, []);
};