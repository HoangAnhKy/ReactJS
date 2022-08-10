# **Giới thiệu cơ bản**

-   Hooks chỉ dùng cho function compoment
-   Tạo ra compoment dễ dàng hơn với hooks
-   Không cần sử dụng this
-   lifecycle là một vòng đời tồn tại từ khi cài đặt tới khi gỡ

# **Các loại hook cơ bản**

-   [useState](#useState),
-   [useEffect](#useEffect),
-   [useLayoutEffect](),
-   [useRef](),
-   [useCallback](),
-   [useMeno](),
-   [useReducer](),
-   [useContext](),
-   [useImperativeHandel](),
-   [useDebugValue](),

---

# **useState**

### Khái niệm cơ bản

-   Là trạng thái của dữ liệu, giúp đơn giản hóa việc thay đổi dữ liệu ra giao diện người dùng
-   Sử dụng khi muốn thay đổi dữ liệu, giao diện sẽ tự động cập nhật

### Cách dùng

```jsx
import { useState } from "react";

function Component() {
    const [state, setState] = useState(initState);

    ...
}
```

### Nguyên lý hoạt động

-   `useState` nhận giá trị khởi tạo là `initState`
-   Sau đó `initState` truyền giá trị qua phần tử `state` trong mảng giá trị
-   Muốn thay đổi giá trị khởi tạo ban đầu ta đùng giá trị còn lại trong mảng `setState` để thay đổi, dữ liệu sẽ được cập nhật lại.

### Thực hành

-   Tạo sự thay đổi khi click button

```jsx
import { useState } from "react";
function App() {
    let initState = 1;
    const [couter, setCouter] = useState(initState);
    const handleCounter = () => {
        setCouter(couter + 1);
    };
    return (
        <div className="App" style={{ padding: 20 }}>
            <h1>{couter}</h1>
            <button onClick={handleCounter}>Button Click</button>
        </div>
    );
}

export default App;
```

### Mội số lưu ý khi áp dụng callback vào state

-   Khi gọi nhiều hàm thay đổi như bên dưới, thì giá trị vẫn sẽ tăng lên một bới vì nói chỉ render lại đúng một lần

```jsx
const [couter, setCouter] = useState(initState);
const handleCounter = () => {
    setCouter(couter + 1);
    setCouter(couter + 1);
    setCouter(couter + 1);
};
```

-   Để có thể thay đổi từ 1 lên 4 ta phải áp dụng callback như sau, nó sẽ gộp code lại và sử lý render một lần tăng từ 1 -> 4

```jsx
const [couter, setCouter] = useState(initState);
const handleCounter = () => {
    setCouter((prevCouter) => prevCouter + 1);
    setCouter((prevCouter) => prevCouter + 1);
    setCouter((prevCouter) => prevCouter + 1);
};
```

-   Một điều đáng lưu ý là khi `initState` là một callback ( nhận giá trị là một hàm ), lúc này `initState` sẽ là giá trị khi chúng ta `return` bên trong hàm

---

# **useEffect**

### Khái niệm cơ bản

-   Dùng để thay đổi dữ liệu, thay đổi DOM Events

### Cách dùng

```jsx
import { useEffect } from "react";
function Component() {
    // useEffect(callback, [mảng giá trị phụ thuộc, không bắt buộc])
    // có 3 trường hợp
    // + useEffect(callback)
    // + useEffect(callback,[rỗng])
    // + useEffect(callback,[dependencies ( có giá trị phụ thuộc ) ])

    //Clean up function
    //  useEffect(() => {

    //     window.addEventListener("scroll", handleScroll);

    //     // clear function
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    ...
}
```

### Nguyên lý hoạt động cho từng trường hợp của useEffect

-   Có 3 trường hợp
    -   useEffect( callback )
        -   gọi Callback mỗi khi compoment re-render
        -   gọi Callback cùng lúc với compoment nhưng thực thi sau khi compoment được thêm vào DOM
    -   useEffect( callback, [] )
        -   Chỉ gọi một lần khi compoment mounted ( compoment được gắn lên document )
    -   useEffect( callback, [ dependencies ] )
        -   Sẽ được gọi lãi mỗi khi dependencies thay đổi
-   Chú ý
    -   mounted ( gắn ) / unmounted ( gỡ)
    -   Callback luôn được gọi sau khi compoment mounted
    -   Cleanup function luôn được gọi trước khi compoment unmounted, tránh tình trạng memory leak

### Thực hành

```jsx
import { useEffect, useState } from "react";
const getUrl = ["posts", "uses", "albums"];
function Context() {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("posts");
    // cách 1 callback
    useEffect(() => {
        document.title = title;
    });
    // cách 2 callback kèm mảng rỗng
    useEffect(() => {
        console.log("Context");
    }, []);
    // cách 3 callback kèm mảng có giá trị phụ thuộc
    useEffect(() => {
        console.log(`https://jsonplaceholder.typicode.com/${url}`);
    }, [url]);

    return (
        <div>
            <div>
                Thay đổi tilte:
                <input
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <div>
                {getUrl.map((item) => (
                    <button
                        key={item}
                        style={
                            item === url
                                ? { background: "black", color: "white" }
                                : {}
                        }
                        onClick={() => setUrl(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Context;
```
