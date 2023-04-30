let memo = [0, 1];
const d = Math.pow(10, 9) + 7;
const fi = (n, memo = []) => {
    if (memo[n]) return memo[n];
    if (n == 2 || n == 1) return 1;
    return (memo[n] = (fi(n - 1, memo) + fi(n - 2, memo)) % d);
};

const sum_fi = (n) => {
    let arr = [];
    for (let i = 1; i <= n; ++i) {
        temp = fi(i, memo);
        memo[i] = temp;
        arr.push(temp);
    }

    return arr.reduce((inistate, value) => {
        return (inistate = ((inistate % d) + (value % d)) % d);
    }, 0);
};

// let start = Date.now();
sum_fi(829);
// console.log(Date.now() - start);
