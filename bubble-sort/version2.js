
function sort(arr) {
    bubbleSort(arr, 0, arr.length)
}

/**
 * 提前终止
 */
function bubbleSort(arr, lo, hi) {
    while(!bubble(arr, lo, hi--)){}
}

function bubble(arr, lo, hi) {
    let sorted = true   // 无罪定论, 假设有序
    while(++lo < hi) {
        if(arr[lo - 1] > arr[lo]) {
            sorted = false
            swap(arr, lo - 1, lo)
        }
    }
    return sorted
}


function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}


let arr = [1, 3, 4, 2, 7, 6, 5, 9, 8, 10]
sort(arr)
console.log(arr)
