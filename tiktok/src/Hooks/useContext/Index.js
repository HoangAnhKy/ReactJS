import Context from "./Context";
import { themeContext } from "./ThemeProvider";
import { useContext } from "react";
import "./Css.css";
function Index() {
    const theme = useContext(themeContext);
    return (
        <div className="padding">
            <button onClick={theme.HandleTheme}>Toggle theme</button>
            <div>
                <Context />
            </div>
        </div>
    );
}

export default Index;
