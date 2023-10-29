const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];

    let currentItem;
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i];
        if (currentItem < pivot) {
            left.push(currentItem);
        } else {
            right.push(currentItem);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

// merge sort
function sort_merge(arr = []) {
    if (arr.length < 2){
        return arr;
    }
    let right = [...arr];
    let mid = right.length / 2;
    let left = right.splice(0, mid);
    return merge(sort_merge(left), sort_merge(right));
}

function merge(left, right) {
    let arr_sort = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr_sort.push(left.shift())
        } else {
            arr_sort.push(right.shift())
        }
    }

    return [...arr_sort, ...left, ...right];
}