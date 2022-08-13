# **Closure**

-   Là một hàm có thể ghi nhớ nơi nó được tạo ra nó và có thể truy cập vào biến ở bên ngoài phạm vi của nó

```js
function createCouter() {
    let counter = 0;
    function increase() {
        return ++counter;
    }
    return increase;
}

const counter1 = createCouter(); // Khởi tạo môi trường

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
```

-   Với ví dụ trên bởi vì counter trong hàm increase không tồn tại nên nó sẽ truy cập tới couter bên ngoài phạm vi của increase để lấy giá trị, sau đó increase sẽ sử lý tăng lên 1 đơn vị và trả về.
-   Bởi vì increase nằm trong createCouter nên ở bên ngoài không thể truy cập vào nó, vì vậy phải return increase để đẩy nó ra ngoài.
-   Và nếu chúng ta thêm dấu () sau increase thì sau mỗi lần thực thi kết quả cũng chỉ có là 1

---

-   Giống việc ta sử dụng class, ta tạo couter trong constructor
-   Sau đó tạo hàm increase để thực thi logic, kết quả tương tự

```js
class createCouter2 {
    constructor(counter = 0) {
        this.counter = counter;
    }

    get_counter() {
        return this.counter;
    }
    increase() {
        return ++this.counter;
    }
}

const counter2 = new createCouter2();
console.log(counter2.increase()); // 1
console.log(counter2.increase()); // 2
console.log(counter2.increase()); // 3
```
