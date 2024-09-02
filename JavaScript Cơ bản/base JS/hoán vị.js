// vẽ toàn bộ các hoán vị của nó ra luôn. Chỉ cần tạo mảng 1 -> n truyền vô chạy thôi
const permute = (arr) => {
    if (arr.length === 0) return [[]];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]; // lấy giá trị hiện tại hiện tại.
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)]; // tạo lại mảng và bỏ đi current.
        const remainingPermutations = permute(remaining); // tạo ra tất cả các hoán vị của các phần tử còn lại.
        for (let perm of remainingPermutations) { 
            result.push([current, ...perm]); // ghép phần tử current với từng hoán vị trong remainingPermutations.
        }
    }
    return result;
};


// giải ra đáp án luôn
const getPermutation = function (n, k) {
    let arr = Array.from({length: n}, (v, i) => i + 1);
    let ans = [];
    const factory = (n) => {
        return n <= 1 ? 1 : factory(n - 1) * n;
    }

    k -= 1;

    while (n !== 0) {
        n--;
        let fact = factory(n); //  Giá trị này cho biết số lượng hoán vị có thể tạo ra từ n phần tử còn lại.
        let index = Math.floor(k / fact); //  xác định nhóm mà hoán vị thứ k nằm trong, do mỗi nhóm có fact hoán vị
        ans.push(arr[index]);
        arr.splice(index, 1); // xóa nó đi;
        k %= fact; // xác định vị trí tiếp theo cần tìm trong nhóm hoán vị con
    }

    return ans;
};

// Ví dụ:
console.log(getPermutation(3, 4)); // Output: "231"

// đệ quy   

function findKthPermutation(n, k) {
    let result = [];
    let used = Array(n).fill(false); // Mảng đánh dấu các phần tử đã được sử dụng
    let count = 0;

    function backtrack(path) {
        if (path.length === n) {
            count += 1;
            if (count === k) {
                result = [...path]; // Lưu kết quả khi tìm thấy hoán vị thứ k
            }
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!used[i - 1]) { // Kiểm tra xem phần tử này đã được sử dụng chưa
                used[i - 1] = true;
                path.push(i);

                backtrack(path);

                if (result.length > 0) return; // Nếu đã tìm thấy hoán vị thứ k, kết thúc sớm
                used[i - 1] = false;
                path.pop(); // Quay lui để thử các hoán vị khác
            }
        }
    }

    backtrack([]);
    return result;
}
