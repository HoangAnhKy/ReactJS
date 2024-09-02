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
        let fact = factory(n);
        let index = Math.floor(k / fact);
        ans.push(arr[index]);
        arr.splice(index, 1);
        k %= fact;
    }

    return ans;
};

// Ví dụ:
console.log(getPermutation(3, 4)); // Output: "231"
