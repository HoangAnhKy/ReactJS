import { useState } from 'react';
function UseState() {
    let initState = 1;
    const [couter, setCouter] = useState(initState);
    const handleCounter = () => {
        setCouter(couter + 1);
    };
    const handleDown = () => {
        setCouter(couter - 1);
    };
    return (
        <div className='App' style={{ padding: 20 }}>
            <h1>{couter}</h1>
            <button onClick={handleCounter}>Up Click</button>
            <button onClick={handleDown}>Down Click</button>
        </div>
    );
}

export default UseState;
