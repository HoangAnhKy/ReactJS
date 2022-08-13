import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo_List_useState from "./Todo_List_useState";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function emitComment(course) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${course}`, {
                detail: `Nội dung comment của ${course}`,
            })
        );
    }, 2000);
}
emitComment("PHP");
emitComment("JavaScript");
emitComment("ReactJS");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <Todo_List_useState /> */}
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
