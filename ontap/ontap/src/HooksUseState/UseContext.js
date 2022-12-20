import { createContext, useState } from 'react';
import Context from './Context';

export const context = createContext();
const UseContext = () => {
    const [text, setText] = useState('default');
    return (
        <div>
            <button
                onClick={() => {
                    setText(text == 'default' ? 'change' : 'default');
                }}>
                change text in three class different
            </button>
            <context.Provider value={text}>
                <Context />
            </context.Provider>
        </div>
    );
};

export default UseContext;
