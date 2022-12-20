import { useReducer } from 'react';
let initState = { text: '', price: 0, list: [] };

const ACTION_ADD_COURSE = 'add_course';
const ACTION_ADD_PRICE = 'add_price';
const ACTION_ADD_LIST = 'add_list';
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_ADD_COURSE:
            return {
                ...state,
                text: action.value,
            };
        case ACTION_ADD_PRICE:
            return {
                ...state,
                price: +action.value,
            };
        case ACTION_ADD_LIST:
            return {
                ...state,
                list: [
                    {
                        text: state.text,
                        price: state.price,
                    },
                ],
            };
        default:
            alert('Cannot find action: ' + action.type + '. Please try again.');
            return state;
    }
};
const UseReduce = () => {
    const [request, dispatch] = useReducer(reducer, initState);  
    const { text, price, list } = request;
    const handleAdd = (handle, value) => {
        let action = {
            type: handle,
            value,
        };
        return dispatch(action);
    };
    return (
        <div className='container mt-5 mb-5'>
            <div>
                <input
                    className='form-control mb-2'
                    placeholder='Name Course'
                    value={text}
                    onChange={(e) => {
                        handleAdd('add_course', e.target.value);
                    }}
                />
                <input
                    className='form-control mb-2'
                    type='number'
                    value={price}
                    step={1000}
                    placeholder='Price Course'
                    onChange={(e) => {
                        handleAdd('add_price', e.target.value);
                    }}
                />
                <button
                    className='btn btn-success form-control mb-2'
                    onClick={() => {
                        dispatch({ type: 'add_list' });
                    }}>
                    Submit
                </button>
            </div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.text} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UseReduce;
