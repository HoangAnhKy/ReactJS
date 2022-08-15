import Index from "./useContext/Index.js";
import ThemeProvider, { themeContext } from "./useContext/ThemeProvider.js";

function App() {
    return (
        <ThemeProvider>
            <Index />
        </ThemeProvider>
    );
}

export default App;
