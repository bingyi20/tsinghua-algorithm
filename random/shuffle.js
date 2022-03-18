
// 随机乱序算法

// 思路
// 从后到前，不断生成[0, j]的随机数r，然后交换 arr[r], arr[j]

// Math.random() 生成[0, 1) 的随机数，
// Math.floor(Math.random() * j+1) 生成[0, j]的随机数

function shuffle(nums) {
    let n = nums.length
    // n, n-1, n-2, n-3, n-4
    while(n > 0) {
        let r = Math.floor(Math.random() * n)
        n--
        let tmp = nums[r]
        nums[r] = nums[n]
        nums[n] = tmp
    }
}

const nums = [1,2,3,4,5,6]
shuffle(nums)
console.log(nums)