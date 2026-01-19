- [Class component](#class-component)
  - [render](#render)
- [khai báo props bắt buộc](#khai-báo-props-bắt-buộc)
- [Hàm cơ bản](#hàm-cơ-bản)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [shouldComponentUpdate (khá giống useCallback)](#shouldcomponentupdate-khá-giống-usecallback)
  - [useRef](#useref)
- [PureComponent](#purecomponent)
- [Redux trong reactJS](#redux-trong-reactjs)
    - [cài redux](#cài-redux)
    - [khởi tạo reducer xử  lý](#khởi-tạo-reducer-xử--lý)
    - [khởi tạo store](#khởi-tạo-store)
    - [thêm store vào phạm vi global](#thêm-store-vào-phạm-vi-global)
    - [thêm vào code](#thêm-vào-code)
  
****
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

## shouldComponentUpdate (khá giống useCallback)
cho phép component tự quyết định có render lại hay không khi props hoặc state sắp thay đổi.

chỉ chạy trong pha UPDATE, không bao giờ chạy khi mount hay unmount.

1. Luồng update đầy đủ:
2. props/state sắp đổi
3. shouldComponentUpdate(nextProps, nextState)
4. `nếu true` → render(),  `nếu false` → bỏ qua render + bỏ luôn componentDidUpdate
    ```js
    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }
    ```

Ý nghĩa:
- chỉ render khi có thứ thật sự thay đổi
- tránh render thừa

ví dụ
```js
import React from "react";

class Counter extends React.Component {
    state = { count: 0 };

    shouldComponentUpdate(nextProps, nextState) {
        console.log(
            "SCU:",
            "current =",
            this.state.count,
            "next =",
            nextState.count,
        );
        return nextState.count !== this.state.count;
    }

    increaseSame = () => {
        // setState nhưng KHÔNG đổi giá trị
        this.setState({ count: this.state.count });
    };

    increase = () => {
        // setState làm thay đổi giá trị
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log("render");
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.increaseSame}>set same</button>
            </div>
        );
    }
}

export default Counter;
```
## useRef

cách dùng 

```js
const myRef = React.createRef();
// output
{
current: null
}
```
ví dụ
- mount ref vào dom

    ```js
    import React from "react";

    class InputFocus extends React.Component {
    inputRef = React.createRef();

    componentDidMount() {
        // DOM đã tồn tại this.inputRef.current = HTMLInputElement
        this.inputRef.current.focus();
    }

    render() {
        return (
        <input
            ref={this.inputRef}
            placeholder="Type here"
        />
        );
    }
    }

    export default InputFocus;
    ```
- mount vào component

    ```js
    class Child extends React.Component {
        sayHello() {
            console.log("Hello from Child");
        }

        render() {
            return <div>Child</div>;
        }
    }

    class Parent extends React.Component {
        childRef = React.createRef();

        componentDidMount() {
            this.childRef.current.sayHello();
        }

        render() {
            return <Child ref={this.childRef} />;
        }
    }
    ```

# PureComponent
Nó là một class component cài sẵn shouldComponentUpdate với logic shallow compare cho toàn bộ props và state.Chỉ vẽ lại khi có gì đó thực sự thay đổi

`PureComponent` = `Component` + `shouldComponentUpdate` (shallow compare). 

```js
import React from "react";

class Parent extends React.Component {
    state = { count: 0 };

    render() {
        return (
            <>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    set same
                </button>
                <Child value={this.state.count} />
            </>
        );
    }
}

class Child extends React.PureComponent {
    render() {
        console.log("Child render");
        return <div>{this.props.value}</div>;
    }
}

export default Parent;
```
# Redux trong reactJS

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

### thêm vào code
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