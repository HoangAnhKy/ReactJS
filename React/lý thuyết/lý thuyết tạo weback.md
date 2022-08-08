[Nguồn tham khảo](https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html)

# **công dụng của webpack**

Dùng để module hóa các file, gộp các file giống nhau lại. Thông tin ví dụ trong webpack.config.js

```sh
    //webpack.config.js

    const path = require("path");

          module.exports = {
              entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
              output: {
                  path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
                  filename: "bundle.js", // Tên file được build ra
              },
              module: {
                  rules: [
                      {
                          test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
                          exclude: /node_modules/, // Loại trừ thư mục node_modules
                          use: ["babel-loader"],
                      },
                      {
                          test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
                          use: ["style-loader", "css-loader"],
                      },
                  ],
              },
              // Chứa các plugins sẽ cài đặt trong tương lai
              plugins: [

              ],
          };
```

# **Lưu ý:**
- `--save-dev` dùng để lưu vào devDependencies của package.json
- `--watch dùng` để lắng nghe
- `--mode` dùng để xác định chạy theo chế độ nào nào vd: --mode development chạy theo dev
- `--hot` dùng để tự động reload tại chỗ thay đổi
- `--open` tự động chạy khi npm start
- `devDependencies` chỉ dùng lúc dev còn Dependencies dùng cả 2
- `.babelrc` dùng để khai báo thêm cho babel, webpack hiểu có thể sử dụng thêm các file được khai báo trong này
- cài thêm dữ liệu sau vào script trong package.json để khi chạy còn hoạt động:
   ```sh
        "start": "webpack --mode development --watch", // dùng khi chạy ứng dụng 
        "build": "webpack --mode production" // dùng khi build dự án }
   ```
- `npm start` dùng để chạy
- `npm run build ` dùng để build dự án sau đó import vào file html

- khai báo defer nó sẽ không chạy vội mà đợi html tải xog nó mới load lại file js chứa nó nếu file js khai báo bên trên

# **Để cài đặt react cho dự án ta dùng**:

- `npm install` Dùng để cài đặt node\*modules
- `npm install webpack webpack-cli --save-dev` dùng để cài đặt webpack,
- `npm install react react-dom --save ` để cài đặt react, react-dom phiên bản mới nhất
- `npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev ` để cài đặt babel với:
    + babel-core: Chuyển đổi ES6 về ES5
    + babel-loader: Cho phép chuyển các files Javascript sử dụng Babel & Webpack
    + babel-preset-env: Cài đặt sẵn giúp bạn sử dụng Javascript mới nhất trên nhiều môi trường khác nhau(nhiều trình duyệt khác nhau). Gói này đơn giản là support truyển đổi ES6, ES7, ES8, ES… về ES5.
    + babel-preset-react: Hỗ trợ chuyển đổi JSX về Javascript

- `npm install css-loader style-loader --save-dev ` 2 thư viện này giúp webpack có thể tải file .css dưới dạng module.
- ` npm install html-webpack-plugin --save-dev` dùng để cài plugin của webpack để tự động khai báo thư viện build khi chạy.
```sh
    sau khi cài đặt thư viện trên ta sẽ thêm dữ liệu sau vào webpack
    khai báo trên đầu
        const HtmlWebpackPlugin = require("html-webpack-plugin");
    khai trong plugin
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
```
- `npm install webpack-dev-server --save-dev` dùng để chạy hiện thị giao diện khi chạy npm start
   ```sh
    //sau khi cài thư viện trên ta chỉ cần thay thế trong `package.json` dữ liệu sau:
    "start": "webpack-dev-server --mode development --open --hot"
   ```
