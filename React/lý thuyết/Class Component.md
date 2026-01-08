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