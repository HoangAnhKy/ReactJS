- Cách dùng khác là giống với việc sử dụng `useContext và useReducer`.

Cách hoạt động sẽ là `Action` gọi tới `dispatch` để tiến hành ghi lại giữ liệu. Trong đó `dispatch` sẽ gọi tới `reducer` để kiểm tra các hoạt động có thể thực hiện sau đó set lại `state` và trả về `View` và từ view muốn thao tác gì lại gọi `Action`.

- chú ý các function hỗ trợ trong state:
  getState -> lấy giá trị trong state.
  dispatch -> Xử lý thay đổi các giá trị thay đổi.
  subscribe -> Thông báo thay đổi cho các bên liên quan ( được gọi thông callback)

[xem demo]()
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
