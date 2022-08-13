import { useState } from "react";
import Context_useEffect from "./Context_useEffect.js";

function emitComment(course) {
    setInterval(() => {
        window.dispatchEvent(
            // tạo mới event
            new CustomEvent(`lesson-${course}`, {
                detail: `Nội dung comment của ${course}`,
            })
        );
    }, 2000);
}
emitComment("PHP");
emitComment("JavaScript");
emitComment("ReactJS");

function Test_useEffect() {
    const [toggle, setToggle] = useState(false);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <Context_useEffect />}
        </div>
    );
}

export default Test_useEffect;
