

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

let R = [1,3,2,5,5,9,8,6,43,21,35]

console.log(stackSort(R))