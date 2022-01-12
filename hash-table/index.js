const Pair = require("./pair")

let hashCount = 3001

/**
 * 拉链法不带头节点的hash表实现
 */
class HashTable {
    constructor() {
        this.table = new Array(hashCount)
    }

    set(key, value) {
        let idx = this._hash(key)
        let {pre, curr} = this._find(key, idx)
        if(curr) {
            curr.value = value
        }else {
            let newPair = new Pair(key, value)
            if(pre) {
                pre.next = newPair
            }else{
                this.table[idx] = newPair
            }
        }
    }

    get(key) {
        let idx = this._hash(key)
        let currPair = this.table[idx]
        let result = null
        while(currPair) {
            if(currPair.key == key) {
                result = currPair
                break
            }
            currPair = currPair.next
        }
        return result ? result.value : null
    }

    delete(key) {
        let idx = this._hash(key)
        let {pre, curr} = this._find(key, idx)
        if(curr) {
            if(pre) {
                pre.next = curr.next
            }else{
                this.table[idx] = curr.next
            }
            return curr.value
        }
        return null
    }

    _find(key, idx) {
        let pre, curr
        pre = curr = null
        curr = this.table[idx]
        if(curr) {
            while(curr) {
                if(curr.key === key) {
                    break
                }
                pre = curr
                curr = curr.next
            }
        }
        return {
            pre,
            curr
        }
    }

    /**
     * 将key值进行hash计算获得一个数字索引
     * @param {*} key 
     */
    _hash(key) {
        key = String(key)
        let codeCount = 0
        let i = key.length
        while(i-- > 0) {
            codeCount += key.charCodeAt(i)
        }
        return codeCount % hashCount
    }

}



// 测试用例
let hash = new HashTable()
hash.set('a', 123)
hash.set('A ', 'A ')
hash.set('b', 345)
hash.set('c', '你好')

console.log('a: ', hash.get('a'))
console.log('A : ', hash.get('A '))
console.log('b: ', hash.get('b'))
console.log('c: ', hash.get('c'))

hash.delete('a')
console.log('===> 删除a节点后 <====')
console.log(hash.get('a'))
console.log(hash.get('A '))
console.log(hash.table)


module.exports = HashTable