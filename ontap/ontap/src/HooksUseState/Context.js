import { memo } from 'react';
import Paragram from './Paragram.js';
const Context = ({ onIncrease }) => {
    console.log('re-render');
    return (
        <div>
            {/* <button onClick={onIncrease}>Up</button> */}
            <Paragram />
        </div>
    );
};
export default memo(Context);
