import { useState } from "react";
import Context_useEffect from "./Context_useEffect.js";
function App() {
    const [toggle, setToggle] = useState(false);
    return (
        <div style={{ padding: 20 }}>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <Context_useEffect />}
        </div>
    );
}

export default App;
