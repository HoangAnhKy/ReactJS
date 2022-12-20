import { useState, useMemo } from 'react';
const UseMemo = () => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState(0);

    const [list, setList] = useState([]);

    const handleSubmit = () => {
        setList((prevList) => [
            ...prevList,
            {
                text: text,
                price: +price,
            },
        ]);
    };

    const total = useMemo(() => {
        return list.reduce((sum, value) => {
            console.log('re-render');
            return sum + value.price;
        }, 0);
    }, [list]);

    return (
        <div className='container'>
            <div className='mt-2'>
                <input
                    type='text'
                    className='form-control mt-2'
                    placeholder='Name Course'
                    value={text}
                    onChange={(e) => {
                        setText((prev) => (prev = e.target.value));
                    }}
                />
                <input
                    type='number'
                    step='1000'
                    className='form-control mt-2'
                    placeholder='Price'
                    value={price}
                    onChange={(e) => {
                        setPrice((prev) => (prev = e.target.value));
                    }}
                />
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className='btn btn-success mt-2 form-control'>
                    Submit
                </button>
            </div>
            <h4>total: {total}</h4>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.text} - {item.price}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UseMemo;
