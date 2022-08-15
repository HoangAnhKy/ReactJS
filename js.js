const a = [1, 2, 3, 2, 1, 4, 1, 4];
const item = (type, a) => {
    return a.indexOf(Math[type](...a));
};

console.log([item("min", a)]);
