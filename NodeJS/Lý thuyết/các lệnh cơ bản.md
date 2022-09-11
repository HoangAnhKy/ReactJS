# **Lưu ý:**

-   `--save-dev` dùng để lưu vào devDependencies của package.json
-   `--watch dùng` để lắng nghe
-   `--mode` dùng để xác định chạy theo chế độ nào nào vd: --mode development chạy theo dev
-   `--hot` dùng để tự động reload tại chỗ thay đổi
-   `--open` tự động chạy khi npm start
-   `devDependencies` chỉ dùng lúc dev còn Dependencies dùng dùng cả 2

# **CÁC LỆNH KHỞI TẠO CƠ BẢN**

-   _Khởi tạo dự án_
    Có thể thêm các thông tin cùng với thông báo

```sh
npm init
```

#### _Cài thư viện Expression_

```sh
npm i express
```

-   Muốn lắng nghe các file tĩnh thì ta chỉ cần sử dụng

```js
//...
app.use(express.static(path.join(__dirname, 'public')));
// ...
```

#### _Cài thư viện nodemon_

-   Dùng để lắng nghe sự thay đổi của ứng dụng và reload lại ứng dụng và dùng để debug chương trình khi lỗi
-   Muốn lắng nghe nhiều file thì chỉ cần tạo thêm `nodemon.json` song song với package.json và cấu hình `ext: ' đuôi file muốn lắng nghe'`

```sh
npm i nodemon --save-dev
```

-   Để sử dụng chúng ta vào file `package.json` khai báo như sau

```js
//...
"scripts": {
        "start": "nodemon tên_file",
        // "start": "nodemon --inspect tên_file", // debug
        // "start": "nodemon tên_file", // lắng nghe thay đổi
        //...
    },
//...
```

#### _Cài thư viện Morgan_

-   có thể quan sát các request gửi về node Server

```sh
npm i morgan --save-dev
```

-   Cách dùng

```js
const morgan = require('morgan');
//...
app.use(morgan('combine'));
```

#### _Cài đặt thư viện handlebars_

-   Dùng để thêm templates vào ứng dụng web

```sh
npm install express-handlebars
```

-   Cách dùng: chỉ cần khai báo vào ứng dụng

```js
// ...
const path = require('path');
const handlebars = require('express-handlebars');

//...
app.engine(
    'hds', // tên đuôi của các file bên trong views
    handlebars.engine({
        extname: '.hds', // đổi tên đuôi
    })
); // khai báo handlebars
app.set('view engine', 'hds'); // sử dụng nội dung đã khai báo
app.set('views', path.join(__dirname, 'resources/views')); // tạo đường dẫn tới file views

app.get('/', (req, res) => {
    res.render('home'); // gọi lại file trong views
});
// ...
```

-   Lưu ý:
    trong views sẽ tồn tại như này

    ```
    ├── index.js
    └── views
        ├── home.handlebars
        └── layouts
            └── main.handlebars
        └── partials
            └── header.handlebars
            └── footer.handlebars
    ```

    nên trong file `main.handlebars` sẽ tồn tại 2 cách gọi:

    -   {{{file cần gọi không phải partials}}}
    -   {{>partials}}

#### _Cài đặt SCSS_

```sh
npm i node-sass --save-dev
```

-   Muốn tạo file css từ file scss ta vào file `package.json` sau đó chạy lệnh `npm run watch`

```js
//...
"scripts": {
        "watch": "node-sass --watch [đường dẫn thư mục sass] --output [đường dẫn thư mục css]"
    },
//...
```
