# **Lưu ý:**

-   `--save-dev` dùng để lưu vào devDependencies của package.json
-   `--watch dùng` để lắng nghe
-   `--mode` dùng để xác định chạy theo chế độ nào nào vd: --mode development chạy theo dev
-   `--hot` dùng để tự động reload tại chỗ thay đổi
-   `--open` tự động chạy khi npm start
-   `devDependencies` chỉ dùng lúc dev còn Dependencies dùng dùng cả 2

# **CÁC LỆNH KHỞI TẠO CƠ BẢN**

#### _Khởi tạo dự án_

-   Có thể thêm các thông tin cùng với thông báo

```sh
npm init
```

-   Cài thêm thư viện sau vào devDependencies để có thể chạy song song nhiều thư viện một lúc trong package.json

```sh
npm install concurrently --save-dev
```

-   Trong file package.json ta cấu hình `start` như sau:

```js
//...
"scripts": {
        "start": "concurrently \"tập lệnh cần chạy 1\" \"tập lệnh cần chạy 2\""
        //vd  "start": "concurrently \"nodemon --inspect src/index.js\" \"npm run watch\"",
    },
//...
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

-   Lắng nghe dữ liệu trả về qua các phương thức `http protocol`

```js
//...

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// nhận dữ liệu
app.post('/content', (req, res) => {
    // truyền dữ liệu nhận được qua data
    res.render('content', { data: req.body });
    // để nhận dữ liệu bên view ta dùng {{{ tên đường dẫn qua và kèm theo đối tượng}}}
});
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

#### _Cài đặt thư viện mongoose_

##### Cài đặt mongoose để connect dữ liệu

```sh
 npm install mongoose
```

##### Cài plugin slug để tạo slug

```sh
 npm i mongoose-slug-generator --save
```

##### Cài đặt method-override để chuyển đổi phương thức được gửi lên server

```js
npm install method-override
```

-   Cách dùng khai báo thư viện ở `index chính`

```js
//...
const methodOverride = require('method-override');

app.use(methodOverride('X-HTTP-Method-Override'));
```

-   ở View chỉ cần dùng lại như sau

```js
<form method='POST' action='/resource?_method=DELETE'>
    <button type='submit'>Delete resource</button>
</form>
```
