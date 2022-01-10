
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

// single loop but O(n^2)
function naiveGnomeSort(arr) {
    for(let i = 0; i < arr.length;) {
        if(i < 1 || arr[i-1] <= arr[i]) {
            i++
        }else{
            swap(arr, i-1, i)
            i--
        }
    }
}

// nested loops but still O(n^2)
function improvedGnomeSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0 && arr[j-1] > arr[j]; j--) {
            swap(arr, j-1, j)
        }
    }
}



let arr = [1, 3, 4, 2, 7, 6, 5, 9, 8, 10]
improvedGnomeSort(arr)
console.log(arr)