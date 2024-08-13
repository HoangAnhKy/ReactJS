# [Craco](https://craco.js.org/docs/) (Create React App Configuration Override)

Là một công cụ giúp cấu hình tùy chỉnh cho dự án React mà không cần phải "eject" (tức là không cần phải tách dự án ra khỏi cấu trúc mặc định của Create React App).

Cài đặt craco dưới devDependencies

```sh
npm i -D @craco/craco
```

Thay đổi trong file `package.json`

```diff
-  "start": "react-scripts start"
+  "start": "craco start" // --verbose ghi log
-  "build": "react-scripts build" 
+  "build": "craco build"
-  "test": "react-scripts test"
+  "test": "craco test"
```

Khởi tạo file `craco.config.ts`

```js
module.exports = {
...
};
```

## webpack

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  webpack: {
    alias: { /* ... */ },
    plugins: {
      add: [ /* 
       // tạo một instance của plugin và truyền các cấu hình cụ thể vào đó.
       new HtmlWebpackPlugin({
          template: './src/index.html', // Đường dẫn đến file HTML mẫu
          filename: 'index.html',      // Tên file HTML đầu ra
          inject: 'body',              // Xác định vị trí mà các <script> sẽ được chèn vào trong tệp HTML ('head' hoặc 'body')
        }),
      */ ],
      remove: [ /* ... */ ],
    },
    configure: { /* ... */},
    configure: (webpackConfig, { env, paths }) => {
      /* ... */
      return webpackConfig;
    },
  },
};
```

- `alias` cho phép thiết lập bí danh (aliases) cho các đường dẫn trong dự án. Điều này giúp rút ngắn và đơn giản hóa việc nhập (import) module, thay vì phải viết đường dẫn tương đối dài dòng.

- `plugins`:
    - `add` phần này cho phép thêm các plugin Webpack tùy chỉnh vào cấu hình
    - `remove` có thể loại bỏ các plugin Webpack không cần thiết mà có thể được thêm bởi cấu hình mặc định hoặc bởi các plugin khác.

- `configure`:
    - `configure (đầu tiên)`: cấu hình hoặc ghi đè các cài đặt Webpack. Ví dụ, có thể thay đổi output, resolve, module.rules, hoặc các phần khác trong cấu hình Webpack.
    - `configure (Hàm callback)`: Đây là một hàm callback được truyền webpackConfig, env, và paths. Có thể sử dụng hàm này để tùy chỉnh toàn bộ cấu hình Webpack dựa trên môi trường (env) hoặc đường dẫn (paths) của dự án.


## watchOptions

```js
const path = require("path");

module.exports = {
  // ...
  watchOptions: {
    ignored: ['**/node_modules']
  },
};
```

- `ignored` Một mảng hoặc biểu thức chính quy chỉ định các tệp và thư mục mà Webpack nên bỏ qua khi theo dõi
- `aggregateTimeout` Thời gian (tính bằng milliseconds) mà Webpack sẽ đợi sau khi phát hiện sự thay đổi trong tệp trước khi bắt đầu quá trình biên dịch lại. Điều này giúp tránh việc biên dịch liên tục trong khi người dùng đang sửa đổi tệp.
- `poll` Thay đổi tần suất kiểm tra các thay đổi trong tệp