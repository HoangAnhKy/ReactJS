import { useCallback, useState } from 'react';
import Context from './Context.js';
const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    // const handelIncrease = useCallback(() => {
    //     setNumber((prev) => prev + 1);
    // }, [number]);

    const handelIncrease = () => {
        setNumber((prev) => prev + 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <Context onIncrease={handelIncrease} />
            <input
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
        </div>
    );
};

export default UseCallback;
