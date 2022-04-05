
function evalute(str) {
    const opts = []     // 操作符栈
    const vals = []     // 数字栈
    let i = 0
    while(i < str.length) {
        let c = str[i]
        if(c == '(') {
            i++;
        }else if( 
            c == '+' || 
            c == '-' ||
            c == '*' ||
            c == '/'
        ) {
            opts.push(c)
            i++
        }else if(str.substr(i, 4) == 'sqrt') {
            opts.push('sqrt')
            i = i + 4
        }else if(c == ')'){
            let right = vals.pop()
            let opt = opts.pop()
            if(opt == '+') vals.push(vals.pop() + right)
            else if(opt == '-') vals.push(vals.pop() - right)
            else if(opt == '*') vals.push(vals.pop() * right)
            else if(opt == '/') vals.push(vals.pop() / right)
            else vals.push(Math.sqrt(right))
            i++
        }else {
            let num = 0
            while(i < str.length && '0' <= str[i] && str[i] <= '9') {
                num = num * 10 + parseInt(str[i])
                i++
            }
            vals.push(num)
        }
    }
    return vals[0]      // 返回唯一的栈内元素
}


const str = '(1+(((2+18)*(4*5))+sqrt(9)))'
console.log(evalute(str))