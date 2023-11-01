# Biểu thức chính quy (https://regex101.com/r/IA8mF0/1)

| ký tự      | mô tả                                                         |
| ---------- | ------------------------------------------------------------- |
| ^          | là khai báo bắt đầu chuỗi                                     |
| $          | là khai báo kết thúc chuỗi                                    |
| +          | Kiểm tra ký tự xuất hiện một hoặc nhiều lần                   |
| \*         | Kiểm tra ký tự xuất hiện 0 hoặc nhiều lần                     |
| ?          | Kiểm tra ký tự xuất hiện 0 hoặc 1 lần                         |
| ()         | Khớp với một nhóm các kí tự đồng thời nhớ kết quả khớp        |
| (?:x)      | Khớp với x nhưng không nhớ kết quả khớp                       |
| x(?=y)     | Chỉ khớp x nếu ngay sau x là y                                |
| x(?!y)     | Chỉ khớp x nếu ngay sau x không phải là y                     |
| {X}        | Kiểm tra ký tự xuất hiện đúng X lần                           |
| {X,}       | Kiểm tra ký tự xuất hiện ít nhất X lần                        |
| {X,Y}      | Kiểm tra ký tự xuất hiện tối thiểu X lần và tối đa Y lần      |
| [abc]      | Tìm các chữ cái a,b hoặc c                                    |
| [^abc]     | Tìm các ký tự không phải a, b và c                            |
| [0-9][a-z] | Tìm các ký tự từ 0-9 hoặc từ a-z                              |
| \d         | Tìm các chữ số                                                |
| \D         | Tìm các ký tự không phải chữ số                               |
| \w         | Tìm các chữ cái                                               |
| \W         | Tìm các ký tự không phải chữ cái                              |
| \s         | Tìm khoảng trắng                                              |
| \S         | Tìm ký tự không phải là khoảng trắng                          |
| \b         | Tìm so khớp bắt đầu hoặc kết thúc chuỗi                       |
| \B         | Tìm so khớp không phải bắt đầu hoặc kết thúc chuỗi            |
| \0         | Tìm ký tự null                                                |
| \n         | Tìm ký tự xuống hàng                                          |
| \t         | Tìm ký tự tab                                                 |
| i          | So sánh không phân biệt chữ hoa chữ thường (case-insensitive) |
| g          | So sánh toàn bộ chuỗi dù trong chuỗi có xuống hàng (global)   |
| m          | So sánh nhiều dòng (multiline)                                |

ví dụ đặc biệt:

```js
let regex = /25[0-5]/gm; // dùng để kiểm tra số từ 250-255
```

# dùng với js

```js
let value = "<h1> test 093 </h1>";
let test = /[<>]/.test(value);
let exec = /[<>]/gim.exec(value);
let match = value.match(/[0-9]+/gim);

console.log(test); //true
console.log(exec); // [ '<', index: 0, input: '<h1> test 093 </h1>', groups: undefined ]
console.log(match); //[ '1', '093', '1' ]
```
