Nguyên lý hoạt động cơ bản giống như sử dụng react Native

-   Muốn sử dụng thì tạo module với cú pháp

    cú pháp:

    ```sh
        <script type="Module" src="./app.js"></script>
    ```

-   Trong file app.js, ta chỉ cần import file js mà chúng ta cần

    -   có thể dùng Destructuring để khai báo

    -   cũng có thể khai báo thẳng tên với dữ liệu trong file khai báo nằm ở default

    ```sh
        // Nội dung trong file notification.js
            export const log = "log";
            export const info = "info";
            export const error = "error";
            export const warn = "warn";
            function notification(messenger, type = "log") {
                console[type](messenger);
            }
            export default notification;
    ```

    vd: import file thông báo default
    import notification from "./nottification.js"; // import file notification
    notification('messenger'); // sử dụng nội dung đã khai báo

    vd: import file thông báo bằng Destructuring
    import notification, { error, info, warn } from "./nottification.js"; // import file notification
    notification("hello world", error); // sử dụng nội dung đã khai báo
