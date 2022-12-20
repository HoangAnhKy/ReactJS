import { useRef, useEffect, useState } from 'react';

const UseRef = () => {
    const [time, setTime] = useState(60);
    const run = useRef();
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef.current);
    }, [inputRef]);
    const countDown = () => {
        run.current = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
    };
    const stop = () => {
        clearInterval(run.current);
    };

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={countDown}>Start</button>
            <button onClick={stop}>stop</button>
            <input ref={inputRef} />
        </div>
    );
};

export default UseRef;
