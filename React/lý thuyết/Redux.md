- Cách dùng khác là giống với việc sử dụng `useContext và useReducer`.

Cách hoạt động sẽ là `Action` gọi tới `dispatch` để tiến hành ghi lại giữ liệu. Trong đó `dispatch` sẽ gọi tới `reducer` để kiểm tra các hoạt động có thể thực hiện sau đó set lại `state` và trả về `View` và từ view muốn thao tác gì lại gọi `Action`.

- chú ý các function hỗ trợ trong state:
  getState -> lấy giá trị trong state.
  dispatch -> Xử lý thay đổi các giá trị thay đổi.
  subscribe -> Thông báo thay đổi cho các bên liên quan ( được gọi thông callback)

[xem demo](https://github.com/HoangAnhKy/ReactJS/tree/main/React/Demo%20Redux)
ví dụ

```js
import { createStore } from "redux"; // khai báo

// hàm khởi tạo và sử dụng action giống reducer của useReducer
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = createStore(todos, ["Use Redux"]); // khai báo cũng giống useReducer

store.dispatch({
  type: "ADD_TODO",
  text: "Read the docs",
});

console.log(store.getState()); // lấy giá trị
// [ 'Use Redux', 'Read the docs' ]
```

# Cách dùng reduxjs/toolkit

**Redux Toolkit (RTK)** là công cụ chính thức và được khuyến nghị để viết Redux logic. Nó giúp đơn giản hóa việc thiết lập store, giảm bớt boilerplate code và tích hợp sẵn những best practice (như Immer.js để mutate state an toàn, Redux Thunk cho async actions, và Redux DevTools).

## Các bước sử dụng cơ bản:

### 1. Cài đặt
Bạn cần cài đặt `@reduxjs/toolkit` và `react-redux`:
```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Tạo Slice (`createSlice`)
`createSlice` sẽ tự động tạo ra các `action creators` và `action types` dựa trên các reducer bạn khai báo.

```js
// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // Tên của slice (dùng để tạo action type prefix)
  initialState: {
    value: 0,
  },
  reducers: {
    // RTK sử dụng Immer bên dưới, nên bạn có thể viết code "mutate" state trực tiếp
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export các actions để gọi ở UI
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer để cấu hình store
export default counterSlice.reducer;
```

### 3. Cấu hình Store (`configureStore`)
`configureStore` tự động kết hợp các reducer, thêm middleware và bật Redux DevTools.

```js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Kết nối slice reducer vào store
  },
});
```

### 4. Cung cấp Store cho ứng dụng (`Provider`)
Bọc ứng dụng bằng `Provider` của `react-redux`.

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 5. Sử dụng trong Component (`useSelector`, `useDispatch`)
- `useSelector`: Lấy dữ liệu từ store ra (tương tự `getState()`).
- `useDispatch`: Gọi action để cập nhật store (tương tự `store.dispatch()`).

```jsx
// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';

export function App() {
  // Lấy giá trị state.counter.value từ store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Tăng 1</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Giảm 1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Tăng 5</button>
      </div>
    </div>
  );
}

export default App;
```
