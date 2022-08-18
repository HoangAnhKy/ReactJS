import { useState, createContext } from "react";

export const themeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const HandleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const value = {
        theme,
        HandleTheme,
    };
    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
}

export default ThemeProvider;
