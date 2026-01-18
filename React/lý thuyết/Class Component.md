# Class component

## render

```js
import React, { Component } from "react";

class Example extends Component {
    render() {
        return (
            <>
                <h1>hello</h1>
            </>
        );
    }
}

export default Example;
```

# khai báo props bắt buộc 
gắn “bản hợp đồng kiểu dữ liệu” cho component, chỉ chấp nhận props đúng theo mô tả này, sai là bị cảnh cáo.
```js
import React, { Component } from "react";
// thêm thư viện này
import PropTypes from "prop-types";

class Example extends Component {
    // logic
}

const propTypes = {
    urlSave: PropTypes.string.isRequired,
};

Example.propTypes = propTypes;

export default Example;
```

# Hàm cơ bản

## useState

```js
import React, { Component } from "react";

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleChange = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleChange}> up</button>
            </>
        );
    }
}
export default Example;
```

## useEffect

Trong class dùng

```js
componentDidMount() {} // Chạy đúng 1 lần, sau khi component: useEffect(() => {}, [])
/*
componentDidMount() {
    fetch("/api/data")
        .then(res => res.json())
        .then(data => this.setState({ data }));
}
*/
componentDidUpdate(prevProps, prevState) {} // Chạy sau mỗi lần component re-render: useEffect(() => {}, [deps])
/*
componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        console.log("count changed");
    }
}
*/
componentWillUnmount() {} // Chạy đúng 1 lần, ngay trước khi component bị xóa khỏi DOM

/*
componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("resize", this.onResize);
}
*/
```

# Redux trong js

### cài redux

```sh
npm install react-redux redux
```

### khởi tạo reducer xử  lý

```js
export const INCREASE_COUNT = "INCREASE_COUNT";

export const increaseCount = () => ({
    type: INCREASE_COUNT,
});
// khi code dự án tách phần này ra làm reducer.js
const initialState = { count: 0 };

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNT:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}
```

### khởi tạo store 

```js
import { createStore } from "redux";
import globalReducer from "./Hook/actions.js";

const store = createStore(globalReducer);

export default store;
```

### thêm store vào phạm vi global

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

# thêm vào code
```js
import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCount } from "./actions";

class Example extends Component {
    render() {
        const { count, increase } = this.props;

        return (
            <>
                <h1>{count}</h1>
                <button onClick={increase}>Click</button>
            </>
        );
    }
}

// Xử  dụng redux
const mapStateToProps = (state) => ({
    count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
    increase: () => dispatch(increaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
```