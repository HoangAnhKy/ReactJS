import { useRef, useEffect } from 'react';
const Praram = () => {
    const ref = useRef();
    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            let h1 = document.createElement('h1');
            h1.innerHTML = 'Hello';
            ref.current.append(h1);
        }
        console.log(ref.current);
    }, []);

    return (
        <>
            <div ref={ref} id='body'></div>
        </>
    );
};
export default Praram;
