
// 经典众数选取算法

// 众数：频繁数，出现的次数比其它所有数出来的次数还多的那个数字

// 众数必然是中位数
// 算法一
// 通过patition算法找到(n/2)大的那个数作为候选者进行后续操作
// 代码略




// 算法二 - 减而治之
// 假设集合A的众数是m，集合A中存在一个偶数个元素集合P
// 集合P满足：P中有元素x，x出现的次数正好是集合P的一半
// 可以推断出 子序列 A-P的众数即原序列A的众数

// 证明
// 如果 x == m，那么A-P中众数个数与平凡数个数的差值不变，所以m依然是A-P集合的众数
// 如果 x != m, 那么A-P中众数个数与平凡数个数的差值不至缩小，所以m依然是集合A-P集合的众数

// 兑现成代码

function majEleCandidate(arr) {
    let maj 
    for(let i = 0, c = 0; i < arr.length; i++) {
        if(c == 0) {
            maj = arr[i]
            c = 1
        }else{
            arr[i] == maj ? c++ : c--
        }
    }
    return maj
}

function majSelect(arr) {
    const maj = majEleCandidate(arr)
    let cnt = 0
    arr.forEach(element => {
        if(element == maj) cnt++
    });
    return cnt > Math.floor(arr.length / 2) ? maj : -1
}


const arr = [1,2,3,4,3,5,3,3,3,10,3]

console.log(majSelect(arr))

const arr1 = [1,2,3,4]
console.log(majSelect(arr1))

const arr2 = [1,1,2,2]
console.log(majSelect(arr2))


