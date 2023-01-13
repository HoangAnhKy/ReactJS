# **ReactJS Router**

-   Đọc thêm các ví dụ về `ReactJS Router` [tại đây](https://reactrouter.com/docs/en/v6)
-   Dùng để định tuyến, di chuyển qua lại giữa các trang
-   Để cài đặt thư viện vào dự án chúng ta dùng lệnh

    ```sh
    npm install react-router-dom@6
    ```

# **BrowserRouter**

-   Dùng để chuyển trang, lưu trữ vị trí hiện tại trong thanh địa chỉ của trình duyệt bằng cách sử dụng các URL sạch và điều hướng bằng cách sử dụng ngăn xếp lịch sử tích hợp của trình duyệt.

### Cách dùng cơ bản

-   import thư viện `BrowserRouter` vào index.js của react

    ```jsx
    // index.js;
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';

    import './index.css';
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
    ```

-   Ở file cấu hình cần sử dụng thêm các hàm khác như
    `Routes, Route, Link` với:

    -   `Routes` Chứa các `Route` nhỏ
    -   `Route` Chứa các `element là các ReactElement` và `path là link` dùng để thay đổi dữ liệu có trong Component chứa
    -   `Link` giống như thẻ a trong html nhưng không reload lại trang

    ```js
    import { Routes, Route, Link } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    import Context from './Context';

    function App() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> Home </Link>
                        </li>
                        <li>
                            <Link to='/About'> About </Link>
                        </li>
                        <li>
                            <Link to='/Context'> Context </Link>
                        </li>
                    </ul>
                </nav>
                // Chỗ này thay đổi dữ liệu
                <Routes>
                    <Route path='/' element={<Home />} />
                    //path trùng với to trong link mới gọi được reactElement
                    <Route path='/About' element={<About />} />
                    <Route path='/Context' element={<Context />} />
                </Routes>
            </div>
        );
    }
    export default App;
    ```

# OutLet

<!-- nav -->

```js
<Routes>
    <Route path='/' element={<TestRouter />}>
        <Route index element={<Home />} />
        <Route path='/Praram' element={<Praram />} />
        <Route path='/Context' element={<Context />} />
    </Route>
</Routes>
```

<!-- TestRouter -->

```js
function TestRouter() {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/Praram'> Praram </Link>
                    </li>
                    <li>
                        <Link to='/Context'> Context </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
```
