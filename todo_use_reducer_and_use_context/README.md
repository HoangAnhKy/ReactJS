# Để làm việc với useContext và useReducer ở phạm vi global

-   khởi tạo useContext qua 3 bứa:

    -   khởi tạo Context chứa `createContext`

        ```js
        import { createContext } from "react";

        const Context = createContext();

        export default Context;
        ```

    -   Khởi tạo Provider chứa phạm vi của các `children` sau đó import vào index chính.

        ```js
        import { useReducer } from "react";
        import Context from "./Context";
        import Reducer, { initState } from "./Reducer";
        function Provider({ children }) {
            const [state, dispatch] = useReducer(Reducer, initState);
            return (
                <Context.Provider value={[state, dispatch]}>
                    {children}
                </Context.Provider>
            );
        }

        export default Provider;
        ```

    -   Khởi tạo `Consumer` chứa giá trị trả về cửa `createContext`

        ```js
        import { useContext } from "react";

        import Context from "./Context";
        const UseStore = () => {
            const [state, dispatch] = useContext(Context);
            return [state, dispatch];
        };
        export default UseStore;
        ```

-   Sau đó khởi tạo `useReducer` và chia nhỏ các file

-   **lưu ý** nên đặt `index.js` cho thư mục gốc chứa các dữ liệu được `export`

```javascript
export { default as StoreContext } from "./Context.js";
export { default as StoreProvider } from "./Provider.js";
export { default as UseStore } from "./Consumer.js";
export * as Action from "./action.js";
export * as Reducer from "./Reducer.js";
```
