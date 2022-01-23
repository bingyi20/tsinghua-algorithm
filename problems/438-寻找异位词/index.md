# 寻找异位词

## 思路分析
s = "cbaebabacd", p = "abc"


如果s中某个字串和p字符串是异位词，那么s字串的长度肯定和p字符串长度一致
维护一个s中的滑动窗口，进行differ运算，s中字符为对应位字符+1，p中字符为对应字符位-1,最遍历count数组，有一位不为0，则differ+1，如果differ为0，则收集答案。
- 移动滑动窗口，根据收入的字符和干掉的字符维护diff的值&count数组


```js
function findAnagrams(s, p) {
    const sLen = s.length 
    const pLen = p.length
    const ans = []
    // 特殊情况，特殊处理
    if(sLen < pLen) {
        return ans
    }
    let differ = 0
    let base = 'a'.charCodeAt()
    let count = new Array(26).fill(0)
    for(let i = 0; i <pLen; i++) {
        ++count[s[i].charCodeAt() - base]
        --count[p[i].charCodeAt() - base]
    }

    count.foreach(value => {
        if(value !=== 0) {
            ++differ
        }
    })

    if(differ === 0) {
        ans.push(0)
    }
    let hi = sLen - pLen
    for(let i = 0; i < hi; i++) {
        let removeChar = s[i].charCodeAt() - base
        if(count[removeChar] === 1) {
            --differ
        }else if(removeChar] === 0) {
            ++differ
        }
        --count[removeChar]
        let addChar = s[i+pLen].charCode() - base
        if(count[addChar] === -1) {
            --differ
        }else if(count[addChar] === 0) {
            ++differ
        }
        ++count[addChar]
        if(differ === 0) {
            ans.push(i+1)
        }
    }
    return ans
} 

```