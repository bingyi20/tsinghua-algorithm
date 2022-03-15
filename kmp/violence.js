

// 暴力解法，时间复杂度O(n * m)

function strStr(P, T) {
    let n = P.length, m = T.length

    let i = 0, j = 0

    while(i < n && j < m) {
        if(P[i] == T[j]) {  // 匹配成功，携手共进
            i++;
            j++;
        }else{
            i -= (j - 1)    // 回到起点下一个字符
            j = 0           // 回到起点
        }
    }

    return (j == m) ? (i - j) : -1

}


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