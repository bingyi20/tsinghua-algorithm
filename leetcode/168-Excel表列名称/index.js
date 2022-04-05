
function convertToTitle(n) {
    const mp = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 
                'H', 'I', 'J', 'K', 'L', 'M', 'N',
                'O', 'P', 'Q', 'R', 'S', 'T', 
                'U', 'V', 'W', 'X', 'Y', 'Z']
    const stack = []
    while(n > 26) {
        let next = Math.floor((n - 1) / 26)
        stack.push(n - next * 26)
        n = next
    }
    stack.push(n)
    return stack.reverse().map(i => mp[i]).join('')
}


console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))
console.log(convertToTitle(2147483647))

