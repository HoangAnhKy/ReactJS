import { useState, useCallback } from "react";
import UseCallBack from "./useCallBack";
function useCallBack2() {
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

export default useCallBack2;
