
function sort(arr) {
    quickSort(arr, 0, arr.length)
}


// 主算法
function quickSort(arr, lo, hi) {
    if(hi - lo < 2) return
    let mi = partition2(arr, lo, hi)
    quickSort(arr, lo, mi)              // 递归遍历左边部分[l0, mi)
    quickSort(arr, mi+1, hi)            // 递归遍历右边部分(mi+1, hi)
}


// L-U-R 版本
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

// L-R-U版本
function partition2(arr, lo, hi) {
    swap(arr, lo, lo + Math.floor(Math.random() * (hi - lo)))   // 选取一个随机数作为轴点
    const pivot = arr[lo]
    let m = lo
    for(let k = lo+1; k < hi; k++) {
        if(arr[k] < pivot) {
            swap(arr, ++m, k)
        }
    }
    swap(arr, lo, m)
    return m
}

function swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}


const arr = [1,8,3,10,6,5,7,2,9,4]

sort(arr)
console.log(arr)