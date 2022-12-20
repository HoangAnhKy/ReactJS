import { useLayoutEffect, useEffect, useState } from 'react';

const UseEffect = () => {
    const [Text, setText] = useState(0);

    useLayoutEffect(() => {
        if (Text > 3) {
            setText(0);
        }
        document.querySelector('.notification').innerHTML = Text;
    }, [Text]);

    return (
        <div id='testEffect'>
            {/* <input
                type='text'
                value={Text}
                placeholder='Test useEffect'
                onChange={(e) => {
                    setText(e.target.value);
                    console.log(Text);
                }}
            /> */}
            <button
                onClick={() => {
                    setText((prev) => prev + 1);
                }}>
                up
            </button>
            <h1 style={{ color: 'red' }} className='notification'></h1>
        </div>
    );
};

export default UseEffect;
