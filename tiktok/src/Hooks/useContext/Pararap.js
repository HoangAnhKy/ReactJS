import { useContext } from "react";
import { themeContext } from "./ThemeProvider";
function Pararap() {
    const value = useContext(themeContext);
    return (
        <p className={value.theme}>
            Bấm vào button sẽ đổi màu backgourp qua 3 component mà không cần
            Props
        </p>
    );
}

export default Pararap;
