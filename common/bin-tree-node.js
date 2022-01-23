class BinTreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }

    toString() {
        let ans = []
        let queue = []
        queue.push(this)
        while(queue.length) {
            let curr = queue.shift()  // 出队访问
            if(curr) {
                ans.push(curr.val)
                queue.push(curr.left)
                queue.push(curr.right)
            }else{
                ans.push('null')
            }
        }
        return ans.toString()
    }
}


// 测试用例
let right4 = new BinTreeNode(7)
let right1 = new BinTreeNode(3, null, right4)
let right2 = new BinTreeNode(4)
let left1 = new BinTreeNode(1, null, right2)
let root = new BinTreeNode(2, left1, right1)
console.log(root + '')