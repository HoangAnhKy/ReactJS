/*
Lý thuyết về Bitwise 
AND (&) Thực hiện phép toán AND trên từng cặp bit tương ứng của hai số. Kết quả là 1 chỉ khi cả hai bit đều là 1.
OR  (|) Thực hiện phép toán OR trên từng cặp bit tương ứng của hai số. Kết quả là 1 nếu ít nhất một trong hai bit là 1
XOR (^) Thực hiện phép toán XOR trên từng cặp bit tương ứng của hai số. Kết quả là 1 nếu chỉ một trong hai bit là 1 (không phải cả hai).

bài này có thể dùng để duyệt qua các phần tử trong mảng
*/


/* 
Cho mảng các số nguyên arr, bạn hãy tìm cách chia mảng này thành hai mảng con sao cho tích của tổng các phần tử trong hai mảng con này là lớn nhất.

Ví dụ:

Cho arr = [2, 4, 7], output là maximalMultiple(arr) = 42.
Cho arr = [-3, -2, 20], output là maximalMultiple(arr) = -34.
*/

function maximalMultiple(arr) {
    let n = arr.length;
    let maxProduct = -Infinity;

    // Duyệt qua tất cả các cách chia mảng thành 2 phần
    for (let i = 1; i < (1 << n) - 1; i++) { // (1 << n) là 2 ^ n
        let sum1 = [], sum2 = [];
        console.group(i)
        // Chia các phần tử vào 2 nhóm dựa trên bitmask
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) { // sẽ trả về một số khác 0 nếu bit thứ j của i là 1, ngược lại là 0.
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

// cách 2 nhưng mà dễ hiểu hơn

function maximalMultiple(arr) {
    let sumArr = arr.reduce((acc, x) => acc + x, 0);
    let ans = -Infinity;

    function backTrack(arr, pos = 0, sum = 0) {
        for (let i = pos + 1; i < arr.length; i++) {
            let sumA = sum + arr[i];
            ans = Math.max(ans, (sumArr - sumA) * sumA);
            backTrack(arr, i, sumA);
        }
    }
    
    backTrack(arr);
    return ans;
}




/*
Một bài khác ví dụ
    Cho mảng các số nguyên arr và số nguyên k, bạn hãy tìm xem có bao nhiêu tập con khác nhau được lấy ra từ tập arr mà tổng của các phần tử trong tập con này đúng bằng k.

    Ví dụ:

    Với arr = [2, 3, 4, 2], k = 5, output là combinationSum(arr, k) = 1.
    Giải thích:

    Tập con thỏa mãn là {3, 2} ({2, 3} và {3, 2} được coi là tập con giống nhau)
    Cho arr = [1, 1, 2, 4, 3], k = 4, output là combinationSum(arr, k) = 3.
    Các tập con thỏa mãn:

    {2, 1, 1}
    {1, 3}
    {4}
 */
function combinationSum(arr, k) {
    let result = new Set();  // Sử dụng Set để tránh trùng lặp tập con
    const n = arr.length;

    // Sắp xếp mảng để đảm bảo thứ tự không thay đổi
    arr.sort((a, b) => a - b);

    // Tổng cộng có 2^n tập con (mỗi phần tử có thể chọn hoặc không chọn)
    const totalCombinations = 1 << n;  // 2^n tập con

    // Duyệt qua tất cả các tập con bằng cách sử dụng bitmask
    for (let mask = 0; mask < totalCombinations; mask++) {
        let subset = [];
        let sum = 0;

        // Xét từng bit trong mask để quyết định có chọn phần tử hay không
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                sum += arr[i];  // Nếu bit thứ i được set, chọn arr[i]
                subset.push(arr[i]);
            }
        }

        // Nếu tổng bằng k, thêm tập con vào Set
        if (sum === k) {
            result.add(JSON.stringify(subset));  // Thêm tập con vào Set dưới dạng chuỗi JSON để tránh trùng lặp
        }
    }

    return result.size;  // Trả về số lượng tập con duy nhất
}