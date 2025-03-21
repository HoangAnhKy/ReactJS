# **Giới thiệu cơ bản**

-   Hooks chỉ dùng cho function compoment
-   Tạo ra compoment dễ dàng hơn với hooks
-   Không cần sử dụng this
-   lifecycle là một vòng đời tồn tại từ khi cài đặt tới khi gỡ

# **Các loại hook cơ bản**

-   [useState](#useState),
-   [useEffect](#useEffect),
-   [useLayoutEffect](#useLayoutEffect),
-   [useRef](#useRef),
-   [useCallback](#useCallback),
-   [useMeno](#useMeno),
-   [useReducer](#useReducer),
-   [useContext](#useContext),
-   [useImperativeHandle](#useImperativeHandle),
-   [useDebugValue](#useDebugValue),

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
    -   mounted ( gắn ) / unmounted ( gỡ )
    -   Callback luôn được gọi sau khi compoment mounted
    -   Cleanup function luôn được gọi trước khi compoment unmounted, tránh tình trạng memory leak
    -   Cleanup function luôn được gọi trước khi callback được gọi ( trừ lần mounted )

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

---

# **useLayoutEffect**

## khái niệm cơ bản

-   `useLayoutEffect` gần giống như `useEffect` đến 99%, chỉ khác nhau một số chức năng. Tỉ lệ sử dụng `useLayoutEffect` là hy hữu, đa số sử dụng `useEffect` là nhiều.
-   Sự khác nhau của `useLayoutEffect` và `useEffect` trong quá trình thực thi:

| STT |  useEffect                                     |              useLayoutEffect                          |
| :-- | :--------------------------------------------- | :---------------------------------------------------- |
| 1   | Cập nhật lại State                             | Cập nhật lại State                                    |
| 2   | Cập nhật lại DOM                               | Cập nhật lại DOM                                      |
| 3   | Render UI                                      | Gọi Cleanup function nếu dependencies thay đổi (sync) |
| 4   | Gọi Cleanup function nếu dependencies thay đổi | Gọi lại Callback (sync)                               |
| 5   | Gọi lại Callback                               | Render UI                                             |

---

# **useRef**

### Khái niệm cơ bản

-   `useRef` giúp việc lưu các giá trị bất kì, qua một tham chiếu từ bên ngoài vào phạm vi của compoment

### Cách dùng

```jsx
import { useRef } from "react";
function App() {
    // Khai báo
    const ref = useRef(123);
    // lấy giá trị cũng như set lại giá trị
    console.log(ref.current);
}

export default App;
```

### Chú ý

-   `useRef` không bị re-render lại, giống như việc chúng ta khai báo nó ra bên ngoài phạm vi của compoment vậy.
-   `useRef` luôn trả về một object, chứa `current` mang một giá trị mà chugns ta gán vào đó, giúp cho chúng ta dễ dàng lấy ra sử dụng cũng như thay đổi giá trị dễ hơn.

---

# **Memo**

### Khái niệm cơ bản

-   `memo` được gọi là `Higer Order Component(HOC)`
-   `memo` giúp chúng ta ghi nhớ lại các `Props` của một `Component` xem props có thay đổi hay không để quyết định có `re-render` lại hay không
-   Sử dụng memo khi compoment sử dụng nhiều `Props` để tránh re-render không cần thiết

### Cách dùng

```jsx
import { memo } from "react";
function Test() {
    return <h1>Hello ae</h1>;
}
export default memo(Test);
```

# **Primitive Types & Reference Types**

### Khái niệm cơ bản

-   Value type: kiểu tham trị
    -   string
    -   boolean
    -   number
    -   bigint
    -   undefined
    -   null
-   Reference Types: kiểu tham chiếu
    -   array
    -   object
    -   function
-   Với value type khi chúng ta gán giá trị như sau:
    ```js
    let a = 1; // khởi tạo a
    let b = a; // gán a vào b => b = 1
    a = 2;
    console.log(a); // 2
    console.log(b); // 1
    ```
    vì khi gán b = a, lúc thực thi code sẽ tạo vùng nhớ riêng cho a và b
-   Với Reference Types thì khi thực thi kết quả sẽ như sau:

    ```js
    let a = [1, 2, 3];
    let b = a;

    a.push(4);

    console.log(a); //[1,2,3,4]
    console.log(b); //[1,2,3,4]

    a = [10, 11, 12];

    console.log(b); //[1,2,3,4]
    console.log(a); // [10, 11, 12]
    ```

    -   khi gán b = a, lúc thực thi code sẽ gán `vùng nhớ giá trị` của a vào b và khi thay đổi giá trị của a, b cũng sẽ thay đổi. Hiểu cách khác thì a và b `chung vùng nhớ giá trị` nhưng khác `key`
    -   Khi gán lại a thì lúc này `vùng nhớ giá trị` của a và b là khác nhau nên sẽ trả về giá trị khác nhau
    -   khi làm việc với `function` để tránh tình trạng `chung vùng nhớ giá trị` thì chúng ta nên khởi tạo lai đối tượng đó.

        ```js
        // bug vì khi tạo mới obj mới nhưng giá trị cũ thay đổi theo
        function bug_createObj(obj) {
            obj.name = "ducati";
            return obj;
        }
        // fixbug
        function fixbug_createObj(obj) {
            obj = { ...obj }; // khởi tạo lại với destructuring
            obj.name = "ducati2";
            return obj;
        }
        const car = {
            name: "BMW",
        };

        console.log(bug_createObj(car)); //{ name: 'ducati' }
        console.log(fixbug_createObj(car)); //{ name: 'ducati2' }
        console.log(car); // { name: 'ducati' }
        ```

---

# **useCallback**

### Khái niệm cơ bản

-   Cần học kỹ
    -   [Memo](#Memo)
    -   [Primitive Types & Reference Types](#primitive_types_&_reference_types)
-   `useCallback` giúp chúng ta tránh được trường hợp tạo hàm mới không cần thiết
-   Cách dùng `useCallback` y như cách dùng `useEffect`

### Cách dùng

```js
import { useState, useCallback } from "react";
function App() {
    const cb = useCallback(callback, []); //c1
    const cb = useCallback(callback, [dependencies]); //c2
}

export default App;
```

### Nguyên lý hoạt động

-   Khi lần đầu được gắn vào compoment `useCallback` sẽ tạo ra `vùng nhớ giá trị` và gán nó vào hằng mà ta tạo, nếu dependencies thay đổi nó mới render lại.
-   Và khi sử dụng `useCallback` chúng ta sẽ phải sử dụng thêm `Memo`, vì nếu không sử dụng `Memo` thì `useCallback` cũng không thể hoạt động được

---

# **useMeno**

### Khái niệm cơ bản

-   Sử dụng `useMeno` để tránh thực hiện lại một logic không cần thiết
-   Cách dùng y hệt `useEffect`

### Cách dùng

```js
import { useMeno } from "react";
function App() {
    const variables = useMeno(callback, []); //c1
    const variables = useMeno(callback, [dependencies]); //c2
}

export default App;
```

# **useReducer**

### Khái niệm cơ bản

-   `useReducer` cung cấp thêm một sự chọn lựa để sử dụng State cho function compoment.
-   Khi sử dụng `useState` để giải quyết bài toán nào thì ta cũng có thẻ sử dụng `useReducer` để giải quyết nó và ngược lại.
-   Khi nào sử dụng `useReducer`: đó là khi cái state trở nên phức tạo hơn như là mảng lồng mảng, obj lồng obj nên sử dụng `useReducer` để dễ hiểu hơn

### Nguyên lý hoạt động

-   Gồm 4 bước:
    -   Init State: giá trị khởi tạo
    -   Actions: hành động
    -   Reducer: khởi tạo reducer, là một hàm nhận đầu vào là (giá trị khởi tạo, hành động)
    -   Dispatch: kích hoạt hành động
-   Sau khi tạo tới bước 3 (tạo function)
    -   tạo hooks để nhận giá trị
        `const [counter, dispatch] = useReducer(reducer, initState);`
    -   kích hoạt dispatch bằng cách truyền giá trị action vào dispatch
        `<button onClick={() => dispatch(UP_ACTION)}>up</button>`

### Cách dùng

```js
import { useReducer } from "react";

// Khởi tạo initState
const initState = 0;
// Khởi tạo action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const ERROR_ACTION = "error";
// Khởi tạo function
const reducer = (initState, action) => {
    switch (action) {
        case UP_ACTION:
            return initState + 1;
        case DOWN_ACTION:
            return initState - 1;
        default:
            throw new Error(`Invalid action ${action}`);
    }
};
function App() {
    /* khởi tạo dispatch như useState nhưng useReducer nhận hai 
     giá trị là useReducer(function, initState) */
    const [counter, dispatch] = useReducer(reducer, initState);
    return (
        <div style={{ padding: 20 }}>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
            <button onClick={() => dispatch(ERROR_ACTION)}>Error</button>
        </div>
    );
}

export default App;
```

# **useContext**

-   `Context` và `useContext`: giúp chúng ta truyền dữ liệu tới một compoment con bất kì mà không cần truyền qua Props.

### Nguyên lý hoạt động

-   Có 3 bước:
    -   Khởi tạo Context
    -   Sử dụng Provider (`Context`)
    -   Nhận giá trị Consumer (`useContext`)

### Cách dùng

-   Tạo file `Index.js`

```jsx
import { useState, createContext } from "react";
//tạo thêm file context làm trung gian giữa index và pararap
import Context from "./Context";
import "./Css.css";
//export themeContext để pararap nhận được dữ liệu
export const themeContext = createContext();
function Index() {
    const [theme, setTheme] = useState("light");
    const HandleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <themeContext.Provider value={theme}>
            <div className="padding">
                <button onClick={HandleTheme}>Toggle theme</button>
                <div>
                    <Context />
                </div>
            </div>
        </themeContext.Provider>
    );
}

export default Index;
```

-   Tạo file `Pararap.js`

```jsx
import { useContext } from "react";
import { themeContext } from "./Index";
function Pararap() {
    //  nhận giữ liệu
    const theme = useContext(themeContext);
    console.log(theme);
    return (
        <p className={theme}>
            Bấm vào button sẽ đổi màu backgourp qua 3 component mà không cần
            props
        </p>
    );
}

export default Pararap;
```

# **useImperativeHandle**

### Khái niệm cơ bản

-   `useImperativeHandle` giúp chúng ta tùy chỉnh ref của một component,
-   `useImperativeHandle` kết hợp với `useRef` thông qua `H-O-C forwarRef` để truyền dữ liệu thông qua Props. Giúp ẩn đi các rủ ro không đáng có của dữ liệu

    -   Khi truyền dữ liệu qua props `<Video ref={ref} />`
    -   file nhận dữ liệu thông qua `forwarRef`

        ```js
        import { forwardRef } from "react";
        import video1 from "./video/download.mp4";

        function Video({Props, ref}) {
            return <video ref={ref} src={video1} width={280} height={500} />;
        }
        export default forwardRef(Video); // Nhận dữ liệu
        ```

### Cách dùng `useImperativeHandle`

```javaScript
import { forwardRef, useImperativeHandle } from "react";

function Video(Props, ref) {
    // useImperativeHandle(ref, Callback);
    // Với ref là giá trị nhận từ file bên ngoài thông qua forwardRef
    // Callback chứa obj các hàm chuẩn bị xử lý dữ liệu khi được gọi thông qua ref

}
export default forwardRef(Video);

```

-   VD:

    -   file video

    ```js
    import { forwardRef, useRef, useImperativeHandle } from "react";
    import video1 from "./video/download.mp4";

    function Video(Props, ref) {
        const videoRef = useRef();
        useImperativeHandle(ref, () => ({
            play() {
                videoRef.current.play();
            },
            pause() {
                videoRef.current.play();
            },
        }));
        return <video ref={videoRef} src={video1} width={280} height={500} />;
    }
    export default forwardRef(Video);
    ```

    -   file app gốc

    ```js
    import { useRef } from "react";
    import Video from "./Video";
    function App() {
        const ref = useRef(); // Dữ liệu ref sẽ được truyền qua forwardRef

        const HandlePlay = () => {
            ref.current.play(); // gọi hàm trong callback của useImperativeHandle
        };
        const HandlePause = () => {
            ref.current.pause(); // gọi hàm trong callback của useImperativeHandle
        };
        return (
            <div style={{ textAlign: "center" }}>
                <div>
                    <button onClick={HandlePlay}>play</button>
                    <button onClick={HandlePause}>Pause</button>
                </div>
                <Video ref={ref} />
            </div>
        );
    }

    export default App;
    ```
