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

## Muốn viết hàm xử lý sẵn như callAPI trong redux thì làm như sau:

### cách dùng
xử  dụng `createAsyncThunk` là một hàm của Redux Toolkit dùng để xử lý các tác vụ bất đồng bộ (API, upload file, login, lấy dữ liệu từ server...) trong Redux một cách đơn giản hơn

```js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
        const response = await axios.get(
            'http://127.0.0.1:8000/api/course'
        );
        return response.data;
    }
);
```
### Vòng đời
Vòng đời của `createAsyncThunk`, khi dùng `dispatch(fetchCourses());`

Redux Toolkit tự động tạo 3 action:
```js
// pending: khi bắt đầu request
course/fetchCourses/pending
// fulfilled: khi request thành công
course/fetchCourses/fulfilled
// rejected: khi request thất bại
course/fetchCourses/rejected
```

### addCase() dùng để đăng ký reducer cho một action cụ thể.

Trong trường hợp createAsyncThunk, Redux Toolkit tự sinh ra các action nên phải dùng extraReducers + addCase để lắng nghe chúng.

```js
extraReducers: (builder) => {
    builder
        // bắt đầu chạy
        .addCase(fetchCourses.pending, (state) => {
            state.loading = true;
        })
        // chạy thành công sẽ xử lý gì
        .addCase(fetchCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        // chạy thất bại sẽ xử lý gì
        .addCase(fetchCourses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
}
```

hiểu đơn giản là nó giống ajax

```js
$.ajax({
    url: '/courses',

    beforeSend() {
        // pending
    },

    success(data) {
        // fulfilled
    },

    error(err) {
        // rejected
    }
});
```

# tips

nên viết addCases thành 1 helper function để  có thể tái xử dụng nhiều lần

```js
const addCases = (builder, thunk, onSuccess) => {
  builder
      .addCase(thunk.pending, (state) => { 
          state.loading = true; 
      })
      .addCase(thunk.fulfilled, (state, action) => {
          state.loading = false;
          onSuccess(state, action);
      })
      .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
      });
};
```

khi dùng

```js
//...
extraReducers: (builder) => {
    addCases(builder, fetchCourses, (state, action) => {
        state.courses = action.payload;
    });
    addCases(builder, createCourse, (state, action) => {
        state.courses.push(action.payload);
    });
    addCases(builder, deleteCourse, (state, action) => {
        state.courses = state.courses.filter(c => c.id !== action.payload);
    });
    addCases(builder, updateCourse, (state, action) => {
        const index = state.courses.findIndex(c => c.id === action.payload.id);
        state.courses[index] = action.payload;
    });
}
```

ví dụ

```js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const local = "http://127.0.0.1:8000/"

// ✅ Khai báo tất cả async thunk ở đây
export const fetchCourses = createAsyncThunk('course/fetchCourses', async () => {
    const response = await axios.get(local + "course");
    return response.data;
});

export const createCourse = createAsyncThunk('course/createCourse', async (data) => {
    const response = await axios.post(local + "course/create", data);
    return response.data;
});

export const deleteCourse = createAsyncThunk('course/deleteCourse', async (id) => {
    await axios.delete(local + `course/${id}`);
    return id;
});

export const updateCourse = createAsyncThunk('course/updateCourse', async ({ id, data }) => {
    const response = await axios.put(local + `course/${id}`, data);
    return response.data;
});

// ==============================

const addCases = (builder, thunk, onSuccess) => {
    builder
        .addCase(thunk.pending, (state) => { state.loading = true; })
        .addCase(thunk.fulfilled, (state, action) => {
            state.loading = false;
            onSuccess(state, action); // ✅ xử lý riêng cho từng action
        })
        .addCase(thunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
};

// ==============================

export const course = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        addCases(builder, fetchCourses, (state, action) => {
            state.courses = action.payload;
        });
        addCases(builder, createCourse, (state, action) => {
            state.courses.push(action.payload);
        });
        addCases(builder, deleteCourse, (state, action) => {
            state.courses = state.courses.filter(c => c.id !== action.payload);
        });
        addCases(builder, updateCourse, (state, action) => {
            const index = state.courses.findIndex(c => c.id === action.payload.id);
            state.courses[index] = action.payload;
        });
    },
});

export default course.reducer;
```