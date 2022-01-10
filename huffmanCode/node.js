class Node {
    constructor(weight, value = '', isLeaf = false, left = null, right = null) {
        this.weight = weight
        this.value = value
        this.isLeaf = isLeaf
        this.left = left
        this.right = right
    }
}

module.exports = Node