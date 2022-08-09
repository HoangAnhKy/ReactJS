import { useState } from "react";
import Context from "./Context_useEffect.js";
function App() {
    const [toggle, setToggle] = useState(false);
    return (
        <div style={{ padding: 20 }}>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <Context />}
        </div>
    );
}

export default App;
