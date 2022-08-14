import { useState, useMemo, useRef } from "react";
function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const HandleAdd = () => {
        setProducts((prev) => {
            return [
                ...prev,
                {
                    name,
                    price: +price,
                },
            ];
        });
        setPrice("");
        setName("");
        nameRef.current.focus();
    };
    const total = useMemo(() => {
        return products.reduce((total, product) => total + product.price, 0);
    }, [products]);
    return (
        <div style={{ padding: 20 }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                value={price}
                placeholder="price"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={HandleAdd}>add</button>
            <div>
                <h3>Total: {total}</h3>
                <ul>
                    {products.map((obj, i) => (
                        <li key={i}>
                            {obj.name} - {obj.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
