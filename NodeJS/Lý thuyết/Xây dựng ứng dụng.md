**Xây dựng ứng dụng**

-   Xây dựng ứng dụng Hello World
    -   Các thông tin cần lưu ý khi sử dụng
        -   `require` khai báo thư viện cần dùng trong dự án
        -   `app` là dự án đang dùng
        -   `app.get('tên router', function)` là sử dụng http protocol có thể nói như đó là route, có thể sử dụng thêm nhiều phương thức khác như `post, put, delete, ...`
        -   `listen(port, callback)` lắng nghe port

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```
