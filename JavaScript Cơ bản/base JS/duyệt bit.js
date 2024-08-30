function maximalMultiple(arr) {
    let n = arr.length;
    let maxProduct = -Infinity;

    // Duyệt qua tất cả các cách chia mảng thành 2 phần
    for (let i = 1; i < (1 << n) - 1; i++) {
        let sum1 = [], sum2 = [];
        console.group(i)
        // Chia các phần tử vào 2 nhóm dựa trên bitmask
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sum1.push(arr[j]);
            } else {
                sum2.push(arr[j]);
            }
            console.log(sum1, sum2)
        }
        console.groupEnd()
        // Tính tích của tổng 2 nhóm và cập nhật giá trị tối đa
        
        let product = sum1.reduce((total, value) => total + value, 0) * sum2.reduce((total, value) => total + value, 0);
        maxProduct = Math.max(maxProduct, product);
    }

    return maxProduct;
}

// Ví dụ sử dụng
console.time()
console.log(maximalMultiple([-3, -2, 20])); // Output: -34
console.timeEnd();

// cách 2

function maximalMultiple(arr) {
    let n = arr.length;
    let maxProduct = -Infinity;

    function divideArray(index, sum1, sum2) {
        // Nếu đã xét hết các phần tử
        if (index === n) {
            // Nếu cả hai mảng con đều có phần tử
            if (sum1 !== 0 && sum2 !== 0) {
                maxProduct = Math.max(maxProduct, sum1 * sum2);
            }
            return;
        }

        // Thêm phần tử arr[index] vào mảng con thứ nhất
        divideArray(index + 1, sum1 + arr[index], sum2);

        // Thêm phần tử arr[index] vào mảng con thứ hai
        divideArray(index + 1, sum1, sum2 + arr[index]);
    }

    // Bắt đầu với việc chưa thêm phần tử nào vào cả hai mảng con
    divideArray(0, 0, 0);

    return maxProduct;
}
