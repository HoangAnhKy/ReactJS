import { useState } from "react";
function App() {
    let initState = 1;
    const [couter, setCouter] = useState(initState);
    const handleCounter = () => {
        setCouter((prevCouter) => prevCouter + 1);
        setCouter((prevCouter) => prevCouter + 1);
        setCouter((prevCouter) => prevCouter + 1);
    };
    return (
        <div className="App" style={{ padding: 20 }}>
            <h1>{couter}</h1>
            <button onClick={handleCounter}>Button Click</button>
        </div>
    );
}

export default App;
