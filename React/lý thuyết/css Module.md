# **Dùng CSS Trong Reactjs**

-   [CSS Module](#CSS_Module)

# **CSS Module**

### Khái niệm cơ bản

-   Giúp cho `ReactJS, webpack, ...` khi gộp file css lại không bị trùng tên class đã được css. Tránh tình trạng lỗi khi trùng tên
-   `CSS Module` chỉnh dùng được trong file đã khai báo, không có tính kế thừa
-   Không thể sử dụng `tagName` trong khi sử dụng `CSS Module`

### Cách dùng

-   Đặt tên file nhớ kèm theo `.module.css` sau đó nó sẽ được mã hóa để tránh trùng
-   Để sử dụng chúng ta sử dụng như một `object`. Vì là `.module.css` sau khi mã hóa sẽ trở thành object sẽ có `key` và `value` với` key là tên class` còn `value là tên class sau khi mã hóa`, khi gán vào một thẻ tagName nào đó chúng ta sử dụng key của css như sau `<h1 style={styles.tên}>Css</h1>;`.
    VD: sử dụng file `Nav.module.css` vào compoment `Nav`

    ```js
    import { styles } from "./Nav.module.css";

    function Nav() {
        return <h1 style={styles.color}>Css</h1>;
        // color là một className trong file Nav.module.css
    }

    export default Nav;
    ```

-   Để khắc phụ việc `CSS Module` không cho kế thừa, chúng ta chỉ cần tạo component chứa file `CSS thường` mà chúng ta muốn dùng và gán nó vào `component` sau đó dùng component đó truyền tới các file con như thể truyền Props vậy.
    VD:
    -   File `GlobalStyle.js`
    ```js
    import "GlobalCSS.css";
    function GlobalStyle({ children }) {
        return { children };
    }
    export default GlobalStyle;
    ```
    -   File cần dùng css
    ```Javascript
    import GlobalStyle from "GlobalStyle.js";
    function App() {
        return (
            <GlobalStyle>
                <div style="className"> // Tên class được đặt trong file GlobalCSS
                    <h1>Css</h1>
                </div>
            </GlobalStyle>
        );
    }
    export default GlobalCss;
    ```
