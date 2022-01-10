
function sort(arr) {
    bubbleSort(arr, 0, arr.length)
}

/**
 * 亦步亦趋完整扫描整个数组
 */
function bubbleSort(arr, lo, hi) {
    while(lo < hi) {
        bubble(arr, lo, hi--)
    }
}

function bubble(arr, lo, hi) {
    while(++lo < hi) {
        if(arr[lo - 1] > arr[lo]) {
            swap(arr, lo - 1, lo)
        }
    }
}


function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}


let arr = [1, 3, 4, 2, 7, 6, 5, 9, 8, 10]
sort(arr)
console.log(arr)
