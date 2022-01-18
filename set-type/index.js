let ID = 0

class SetType{
    constructor(arr) {
        this.id = ID++
        arr = Array.isArray(arr) ? arr : []
        this.build(arr)
    }
    build(arr) {
        this.data = arr.map(value => {
            return [-1, value]
        })
    }

    insert(value) {
        this.data.push([-1, value])
    }

    /**
     * 查找元素所在集合，增加路径压缩算法
     * @param {*} root 
     * @returns 
     */
    find(rank) {
        const collection = []
        while(this.data[rank][0] >= 0) {
            collection.push(rank)
            rank = this.data[rank][0]
        }
        collection.forEach(idx => {
            this.data[idx][0] = rank
        })
        return rank
    }

    /**
     * 合并两颗树
     * @param {Number} rank1 
     * @param {Number} rank2 
     * @returns 
     */
    union(rank1, rank2) {
        let root1 = this.find(rank1)
        let root2 = this.find(rank2)
        if(root1 === root2) return
        let parent1 = this.data[root1][0]
        let parent2 = this.data[root2][0]
        let sum = parent1 + parent2
        if(parent1 > parent2) {
            this.data[root1][0] = root2
            this.data[root2][0] = sum
        }else{
            this.data[root2][0] = root1
            this.data[root1][0] = sum
        }
    }

    valueOf() {
        return this.data
    }

    toString() {
        return JSON.stringify(this.data)
    }

}


// 测试用例
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const set = new SetType(arr)
console.log(set.data)

set.union(0,1)
set.union(1,2)
set.union(0,5)
console.log(set.data)

set.union(3,4)
set.union(3,6)

console.log(set.data)

set.union(0, 3)
console.log(set.data)

console.log(set.find(4))
console.log(set.find(6))
console.log(set.data)

set.insert('H')