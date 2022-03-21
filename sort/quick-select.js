
// 从一个数组中，选取第k小的那个元素


function quickSelect(arr, k) {
    k = k - 1
    let lo = 0, hi = arr.length - 1
    while(lo < hi) {
        let i = lo, j = hi
        const pivot = arr[lo]
        // partition算法
        while(i < j) {
            while(i < j && pivot <= arr[j]) j--;    arr[i] = arr[j]
            while(i < j && arr[i] <= pivot) i++;    arr[j] = arr[i]
        }
        arr[i] = pivot
        if(k <= i) hi = i - 1
        if(i <= k) lo = i + 1
    }
    return arr[k]
}



const arr = [1, 6, 3, 8, 5, 2]
console.log(quickSelect(arr, 3))

const arr1 = [2,2,2,2,2,2,2]
console.log(quickSelect(arr1, 3))


