import { useEffect, useState } from "react";
const getUrl = ["posts", "uses", "albums"];
function Context() {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("posts");

    useEffect(() => {
        document.title = title;
    });
    useEffect(() => {
        console.log("Context");
    }, []);
    useEffect(() => {
        console.log(`https://jsonplaceholder.typicode.com/${url}`);
    }, [url]);

    return (
        <div>
            <div>
                Thay đổi tilte:
                <input
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <div>
                {getUrl.map((item) => (
                    <button
                        key={item}
                        style={
                            item === url
                                ? { background: "black", color: "white" }
                                : {}
                        }
                        onClick={() => setUrl(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Context;
