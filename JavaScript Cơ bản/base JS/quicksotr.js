const mergeSort = (arr) =>  {
    const handle = (left, right) => {
        let merge = [];
        while (left.length && right.length) {
            merge.push((left[0] < right[0]) ? left.shift() : right.shift());
        }
        return [...merge, ...left, ...right];
    }

    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let right = [...arr];
    let left = right.splice(0, mid);
    return handle(mergeSort(left), mergeSort(right))
}

const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    const [left, right] = [[], []];
    const mid = Math.floor(arr.length / 2);
    const value_check = arr[mid] ?? 0;
    for (let i = 0; i < arr.length; ++i){
        if (i !== mid){
            let item = arr[i];
            item < value_check ? left.push(item) : right.push(item);
        }
    }
    return [...quickSort(left),value_check,...quickSort(right)];
};

const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
};

// ----- search 

const searchBinary = (arr, target, start, end) => {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    return arr[mid] < target ? searchBinary(arr, target, mid + 1, end) : searchBinary(arr, target, start, mid - 1);
}


console.log(mergeSort([1, 5, 4, 2, 6, 3, 7, 9, 8, 10, 0]));
console.log(quickSort([1, 5, 4, 2, 6, 3, 7, 9, 8, 10, 0]));
console.log(bubbleSort([1, 5, 4, 2, 6, 3, 7, 9, 8, 10, 0]));