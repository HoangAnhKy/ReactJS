import { memo } from "react";
function useCallBack({ onIncrease }) {
    console.log("re-render");
    return (
        <>
            <h1>Hello ae</h1>
            <button onClick={onIncrease}>up</button>
        </>
    );
}
export default memo(useCallBack);
