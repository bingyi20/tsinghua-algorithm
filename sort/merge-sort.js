

// 在众多排序算法中，时间复炸度的下限是 Ω(nlogn)，上限是O(n^2)
// 其中最稳定的算法是归并排序
// 1. 无论什么测试数据下，它的时间复杂度都是O(nlogn)
// 2. 它是一种稳定的算法
// 3. 它的数据可以分布在多个节点上，大数据时代的计算它的身影异常活跃

// 算法思路
// 1. 将数组一分为二
// 2. 将两个数组分别排序
    // 递归执行第一步，直到只有单个数据项
// 3. 将两个排序好的数组归并成一个排序好的数组


function sort(arr) {
    mergeSort(arr, 0, arr.length)
}

// 主算法[lo, hi)
function mergeSort(arr, lo, hi) {
    if(hi - lo < 2) return          // 单个数据项已经有序
    let mi = (lo + hi) >> 1
    mergeSort(arr, lo, mi)          // 递归排序左半段
    mergeSort(arr, mi, hi)          // 递归排序右半段
    merge(arr, lo, mi, hi)          // 将两个排序好的数组进行归并
}

// 归并算法的核心, merge算法
function merge(A, lo, mi, hi) {
    const lb = mi - lo
    const B = new Array(lb)
    for(let i = 0; i < lb; i++) B[i] = A[i + lo]    // 将数组A前半段拷贝到数组B中
    let i = lo, j = 0, k = mi
    while(j < lb && k < hi) {
        if(A[k] < B[j]) A[i++] = A[k++]
        else A[i++] = B[j++]
    }
    // B还有剩余部分直接copy过来
    while(j < lb) {
        A[i++] = B[j++]
    }

}

const arr = [1,3,5,2,4,8,4,5,2,10,99,34]

sort(arr)

console.log(arr)