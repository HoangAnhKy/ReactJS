import { useReducer } from "react";

// Khởi tạo initState
const initState = 0;
// Khởi tạo action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const ERROR_ACTION = "error";
// Khởi tạo function
const reducer = (initState, action) => {
    switch (action) {
        case UP_ACTION:
            return initState + 1;
        case DOWN_ACTION:
            return initState - 1;
        default:
            throw new Error(`Invalid action ${action}`);
    }
};
function UseReducer() {
    // khởi tạo dispatch như useState
    const [counter, dispatch] = useReducer(reducer, initState);
    return (
        <div style={{ padding: 20 }}>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
            <button onClick={() => dispatch(ERROR_ACTION)}>Error</button>
        </div>
    );
}

export default UseReducer;
