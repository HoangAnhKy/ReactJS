import { useContext } from 'react';
import { context } from './UseContext.js';
const Paragram = () => {
    const textparam = useContext(context);
    return (
        <div>
            <h1>{textparam}</h1>
        </div>
    );
};
export default Paragram;
