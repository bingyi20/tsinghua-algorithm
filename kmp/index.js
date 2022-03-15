


function strStr(P, T) {
    const n = P.length, m = T.length

    let i = 0, j = 0

    const N = buildNext2(T)
    console.log(N)
    while(i < n && j < m) {

        if(j < 0 || P[i] == T[j]) {  // 匹配成功，携手共进，假设字符T -1 处为通配符*，作为哨兵
            i++;
            j++;
        }else{
            j = N[j]        // 移到前一个可匹配字符
        }
    }

    return (j == m) ? (i - j) : -1
}

// 预处理P模式串
function buildNext(P) {
    let m = P.length, i = 0
    const N = new Array(m)
    N[i] = -1; 
    
    while(i < m - 1) {
        let j = i
        while(j > 0 && P[i] != P[N[j]]) j = N[j]    // 每次从[j-1]开始往回比对
        N[++i] = N[j] + 1
    }

    return N
}

// 预处理P模式串，代码优化
function buildNext2(P) {
    let m = P.length, i = 0     // “主”串指针
    const N = new Array(m)      // next表
    let t = N[0] = -1           // -1位置添加哨兵通配符号*

    while(i < m - 1) {
        if(t < 0 || P[i] == P[t]) {
            N[++i] = ++t        // 携手共进
        }else{
            t = N[t]            // 移动到上一个匹配串
        }
    }
    return N
}






// next表构造过程
// next[0] = -1   [-1, 0)  假设在-1处补1个通配符*作为哨兵
// next[1] = 0   [0, 1)   0

// 状态转移过程 next[j+1]  => [0, j]
//      next[j+1] = next[j] + 1         当P[j] === P[next[j]]
//      next[j+1] = next[next[j]] + 1   当P[next[j]] === P[next[next[j]]]




// console.log(buildNext2("bba"))

// console.log(buildNext2("chichi"))



if(strStr("hello", "ll") === 2) {
    console.log("Asscept.")
}else{
    console.log("Error")
}



if(strStr("aaaaa", "bba") === -1) {
    console.log("Asscept.")
}else{
    console.log("Error")
}

if(strStr("", "") === 0) {
    console.log("Asscept.")
}else{
    console.log("Error")
}