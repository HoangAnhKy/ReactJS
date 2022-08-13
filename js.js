// bug vì khi tạo mới obj mới nhưng giá trị cũ thay đổi theo
function bug_createObj(obj) {
    obj.name = "ducati";
    return obj;
}
// fixbug
function fixbug_createObj(obj) {
    obj = { ...obj }; // khởi tạo lại
    obj.name = "ducati2";
    return obj;
}
const car = {
    name: "BMW",
};

console.log(bug_createObj(car)); //{ name: 'ducati' }
console.log(fixbug_createObj(car)); //{ name: 'ducati2' }
console.log(car); // { name: 'ducati' }
