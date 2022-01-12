const Node = require("./node")


function huffmanDecode(table) {
    const sequence = buildNodeSquence(table)
    const huffmanTree = buildHuffmanTree(sequence)
    const result = parseHuffTree(huffmanTree)
    return result
}

function buildHuffmanTree(sequence) {
    if(!sequence.length) return null
    while(sequence.length >= 2) {
        let [node1, node2] = sequence.splice(0, 2)
        let newNode = unionNode(node1, node2)
        sequence.push(newNode)
        sequence.sort((a, b) => {
            return a.weight - b.weight
        })
    }
    return sequence[0]
}

/**
 * 解析Huffman编码树，获取最终每个字符编码
 * @param {Node} tree 哈夫曼编码树
 */
function parseHuffTree(tree) {
    const stack = []
    const result = {}
    preOrder(tree, stack, result)
    return result
}

function preOrder(root, stack, result) {
    if(!root) return
    if(root.isLeaf) {
        result[root.value] = stack.join("")
    }
    // 遍历左子树
    stack.push('0')
    preOrder(root.left, stack, result)
    stack.pop()

    // 遍历右子树
    stack.push('1')
    preOrder(root.right, stack, result)
    stack.pop()
    
}

function unionNode(node1, node2) {
    let weight = node1.weight + node2.weight
    let newNode = new Node(weight, '', false, node1, node2)
    return newNode
}

function buildNodeSquence(table) {
    const sequence = []
    Object.keys(table).forEach(key => {
        let weight = table[key]
        sequence.push(new Node(weight, key, true))
    })
    sequence.sort((a,b) => {
        return a.weight - b.weight
    })
    return sequence
}


// 测试用例
const table = {
    A: 4,
    B: 3,
    C: 2,
    D: 1
}

console.log(huffmanDecode(table))


export default huffmanDecode