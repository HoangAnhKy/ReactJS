import { useReducer, useRef } from "react";
import "./useContext/Css.css";
import { ADD_ACTION, SET_JOB, SET_PRICE } from "./useReducer/action";
import reducer, { initState, set_input, Delete } from "./reducer.js";
function Todo() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, price, jobs } = state;
    const nameRef = useRef();
    const HandleSubmit = () => {
        dispatch({ type: ADD_ACTION });
        dispatch(set_input("", SET_JOB));
        dispatch(set_input("", SET_PRICE));
        nameRef.current.focus();
    };
    const HandleRemove = (i) => {
        const value = jobs.splice(i, 1);
        dispatch(Delete(jobs));
    };
    return (
        <div className="padding">
            <input
                ref={nameRef}
                value={job}
                placeholder="Job"
                type="text"
                onChange={(e) => dispatch(set_input(e.target.value, SET_JOB))}
            />
            <input
                value={price}
                placeholder="price"
                type="text"
                onChange={(e) => dispatch(set_input(e.target.value, SET_PRICE))}
            />
            <button onClick={HandleSubmit}>Add</button>
            <div>
                <ul>
                    {jobs.map((obj, i) => (
                        <li key={i}>
                            <p>
                                {obj.job} - {obj.price}{" "}
                                <button onClick={() => HandleRemove(i)}>
                                    Remove
                                </button>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
