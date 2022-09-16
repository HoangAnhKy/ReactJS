var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ------------ ép kiểu về string

// console.log(array.toString());
// console.log(array.join(', '));

// ------------ xóa phần tử cuối mảng

// console.log(array.pop(), array)

// ------------ thêm phần tử vào cuối mảng

// console.log(array.push(11), array);

//------------ xóa đầu
// console.log(array.shift());

// ---------- thêm vào đầu 
// console.log(array.unshift());

// ---------- xóa mảng từ đâu tới đâu

// console.log(array.splice(1, 7));

// ------------------ chèn với splice

// console.log(array.splice(1, 0, 0), array)

// ------------------ hợp nhất chuỗi

// console.log(array.concat([11, 12]))

// ------------------ lấy chuỗi con
// console.log(array.slice(0, 3))

// thao tác với mảng
let json = [{
    name: 'PHP',
    price: 100,
}, {
    name: 'Ruby',
    price: 200,
}, {
    name: 'ASP.net',
    price: 100,
}, {
    name: 'HTML, css',
    price: 100,
}, {
    name: 'ReactJS',
    price: 100,
}];
/*
    sử dụng các kiểu dữ liệu sau
        foreach  chạy như vòng lặp for

        tìm kiếm trả về giá trị đúng hoặc sai.

            every()   phải chạy đúng hết mới được
            some()    chỉ cần 1 thằng

        tìm kiếm và trả về giá trị nếu đúng điều kiện.

            find() trả về 1 thằng
            filter()

        reduce()
*/


// json.forEach((obj) => { console.log(obj) });

// console.log(json.every((obj, i) => { console.log(i); return (obj.price == 100) }));
// console.log(json.some((obj, i) => { console.log(i); return (obj.price == 100) }));
// console.log(json.find((obj, i) => { console.log(i); return (obj.price == 200) }));
// console.log(json.filter((obj, i) => { return (obj.price == 100) }));