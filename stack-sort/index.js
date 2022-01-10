

function stackSort(R) {
    const S = []
    while(R.length) {
        let top = R.pop()
        while(S.length && top < S[S.length - 1]) {
            R.push(S.pop())
        }
        S.push(top)
    }
    return S
}

// version 2 有瑕疵
// 插入排序 O(I + n) 其中I是逆序对的个数，插入排序是输入敏感型算法
function stackSort2(R) {
    const S = []
    if(!R.length) return S
    let top = null
    while(R.length || top !== null) {
        if(top === null) {
            top = R.pop()
        }
        // 空会被命中多少次
        if(S.length == 0 || S[S.length - 1] <= top) {
            S.push(top)
            top = null
        }else{
            // push, pop操作会被命中多少次
            R.push(S.pop())
        }
    }
    return S
}

let R = [1,3,2,5,5,9,8,6,43,21,35]

// console.log("===> version1 :")
// console.log(stackSort(R))
console.log("===> version2 :")
console.log(stackSort2(R))