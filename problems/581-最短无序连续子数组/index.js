
/**
 * 
 * @param {Array} nums 
 * @returns 
 */
function findUnsortedSubarray(nums) {
    let n = nums.length
    if(n === 0) return 0
    let left = -1
    let right = -1
    let max = -Infinity
    let min = Infinity
    for(let i = 0; i < n; i++) {
        // 寻找右边界
        if(max > nums[i]) {
            right = i
        }else{
            max = nums[i]
        }
        // 寻找左边界
        let j = n - i - 1
        if(nums[j] > min) {
            j = left
        }else{
            min = nums[j]
        }
    }
    return left === -1 ? 0 : (right - left + 1)
} 