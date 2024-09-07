/*
Cho xâu s và ký tự c. Tại mỗi vị trí của s bạn có thể chèn ký tự c vào đúng một lần hoặc không chèn. Hãy xác định số xâu khác nhau được tạo từ xâu s và ký tự c.

Ví dụ

Cho s = 'AB', c = 'C', output là numberOfDistinctString(s, c) = 8.
Từ s và c có thể tạo ra 8 xâu khác nhau:
"AB"
"CAB"
"ACB"
"ABC"
"CACB"
"ACBC"
"CABC"
"CACBC"
Cho s = "AA", c = 'A', output là numberOfDistinctString(s, c) = 4.
Từ s và c có thể tạo ra 4 xâu khác nhau:
"AA"
"AAA"
"AAAA"
"AAAAA"
*/

// quay lui
function numberOfDistinctString(s, c) {
    const set = new Set();

    const handle = (str, i) => {
        if (i === s.length){
            set.add(str)
            set.add(str + c)
            return;
        }
        handle(str + s[i], i+1); // không chèn
        handle(str + c + s[i], i+1); // chèn
    }
    handle("", 0);

    return set.size;
}

// giải thuần

function numberOfDistinctString(s, c) {
    const set_a = new Set();  // Tập hợp để lưu các xâu duy nhất
    const stack = [];  // Sử dụng stack để thay thế cho đệ quy

    // Khởi tạo stack với giá trị ban đầu là xâu rỗng và chỉ số 0
    stack.push({ str: "", i: 0 });

    while (stack.length > 0) {
        const { str, i } = stack.pop();  // Lấy phần tử đầu từ stack

        if (i === s.length) {
            set_a.add(str);          // Thêm xâu hiện tại vào tập hợp
            set_a.add(str + c);      // Thêm xâu có ký tự 'c' vào cuối
        } else {
            // Thêm hai nhánh: một với chỉ ký tự s[i], một với cả c + s[i]
            stack.push({ str: str + s[i], i: i + 1 });
            stack.push({ str: str + c + s[i], i: i + 1 });
        }
    }

    return set_a;  // Trả về tập hợp các xâu duy nhất
}