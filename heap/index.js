
/**
 * 最大最小堆简单实现
 */
class Heap {
    size = 0
    data = []
    compare = (a, b) => a > b
    constructor(compare) {
        if(typeof compare === 'function') {
            this.compare = compare
        }
        let bool = this.compare(2,1)
        // 添加哨兵
        this.data[0] = (bool ? Infinity : -Infinity) 
    }

    get isEmpty() {
        return this.size == 0
    }

    insert(item) {
        let i = ++this.size
        for(;!this.compare(this.data[i >> 1], item); i >>= 1) {
            this.data[i] = this.data[i >> 1]
        }
        this.data[i] = item
    }

    delete() {
        if(this.isEmpty) {
            throw Error("堆为空")
        }
        let ans = this.data[1]

        // 最后一个元素
        let tmp = this.data[this.size--]

        let parent = 1
        let child
        for(;parent * 2 <= this.size; parent = child) {
            child = parent * 2
            if(child < this.size && this.compare(this.data[child+1], this.data[child])) {
                child++
            }
            if(this.compare(tmp, this.data[child])) break
            this.data[parent] = this.data[child]
        }
        this.data[parent] = tmp
        return ans
    }
}


// 测试用例，可自定义比较函数
let h = new Heap((a, b) => {
    return b >= a
})
h.insert(20)
h.insert(18)
h.insert(9)
h.insert(13)
h.insert(9)
h.insert(3)
h.insert(6)

console.log("元素出队：")
while(!h.isEmpty) {
    console.log(h.delete())
}

