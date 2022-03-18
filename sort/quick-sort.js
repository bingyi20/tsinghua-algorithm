
function sort(arr) {
    quickSort(arr, 0, arr.length)
}


// 主算法
function quickSort(arr, lo, hi) {
    if(hi - lo < 2) return
    let mi = partition(arr, lo, hi)
    quickSort(arr, lo, mi)              // 递归遍历左边部分[l0, mi)
    quickSort(arr, mi+1, hi)            // 递归遍历右边部分(mi+1, hi)
}

function partition(arr, lo, hi) {
    let i = lo, j = hi - 1
    let pivot = arr[lo]
    while(i < j) {
        while((i < j) && pivot <= arr[j]) j--; arr[i] = arr[j]
        while((i < j) && arr[i] <= pivot) i++; arr[j] = arr[i]
    }
    arr[i] = pivot
    return i
}


const arr = [1,8,3,10,6,5,7,2,9,4]

sort(arr)
console.log(arr)