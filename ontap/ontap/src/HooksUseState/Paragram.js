import { useContext } from 'react';
import { context } from './UseContext.js';
import style from '../CssGlobal/cssModule.module.css';
const Paragram = () => {
    const textparam = useContext(context);
    return (
        <div>
            <h1 className={textparam === 'default' ? style.color_red : style.color_green}>{textparam}</h1>
        </div>
    );
};
export default Paragram;
