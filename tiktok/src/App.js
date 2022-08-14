import { useState, useCallback } from "react";
import UseCallBack from "./useCallBack";
function App() {
    const [counter, setCounter] = useState(0);
    const handleIncrease = useCallback(() => {
        setCounter((prev) => prev + 1);
    }, []);
    return (
        <div style={{ padding: 20 }}>
            <UseCallBack onIncrease={handleIncrease} />
            <h1>{counter}</h1>
        </div>
    );
}

export default App;
