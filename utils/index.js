const BinTreeNode = require('../common/bin-tree-node')


const cloneBinTree = (node) => {
    if(!node) return null
    const copy = new BinTreeNode(node.val)
    copy.left = cloneBinTree(node.left)
    copy.right = cloneBinTree(node.right)
    return copy 
}
