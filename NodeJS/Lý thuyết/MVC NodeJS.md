**Tạo mô hình MVC với nodeJS**

# Khởi tạo

    - Khởi tạo 3 fordle cơ bản như sau

```js
    src
    └── app
        └── controllers // cần chú ý
        └── modules  // cần chú ý
    └── public
        └── Css
        └── img
    └── resources
        └── Scss
        └── views
    └── routers  // cần chú ý
        └── index.js // Router chính
        └── web.js // groups các router thuộc web
    └── index.js // gốc
    └── packages-lock.json
    └── packages.json

```

# Khởi tạo file Controllers

-   Lưu ý: Nên sử dụng class để khởi tạo và nên export nó ra ngoài để dễ dàng khai báo, sử dụng

vd:

```js
class HomeController {
    index(req, res) {
        res.render('home');
    }
}

module.exports = new HomeController();
// khai báo: const HomeController = require('./HomeController')
```

# Khởi tạo file Routers

-   Bên index chính của `src` chúng ta chỉ cần khai báo như sau

```js
// ...
const router = require('./routers');

router(app); // với app là framework express đã khai báo trong index
```

## Router chính

```js
const webRoute = require('./web'); // các group route
function route(app) {
    app.use('/', webRoute); // sử dụng nội dung trong group route
}

module.exports = route;
```

## group route

-   Dùng để khai báo cho router chính
-   `Lưu ý:` nên khai báo các trang index về cuối, nếu không sẽ bị lỗi vào mỗi trang index

```js
const express = require('express');
const router = express.Router();

const HomeController = require('../app/controller/HomeController');

router.get('/', HomeController.index);
// n file khác
module.exports = router;
```
