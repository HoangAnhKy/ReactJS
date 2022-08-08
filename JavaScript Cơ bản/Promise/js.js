// khai báo DOM
const DOM = document.getElementById("render_html");
const form = document.getElementById("form_course");
let html = [];

const API = "http://localhost:3000/courses";
var APIUpdate = "";
const start = () => {
    getCourse(API, renderCourse);
    buttonCreate(API, CUD);
};
// Read
const renderCourse = (data) => {
    html = data.map((obj) => {
        return `<tr>
                    <td>${obj.id}</td>
                    <td>${obj.name}</td>
                    <td>
                        <a href="${API + "/" + obj.id}" class="btn btn-primary">
                            Cập nhật
                        </a>
                    </td>
                    <td>
                        <a href="${API + "/" + obj.id}" class="btn btn-danger">
                            Xóa
                        </a>
                    </td>
                </tr>`;
    });
    DOM.innerHTML = html.join("");
    AddEven();
};
const render_form = (data) => {
    let name = form.querySelector("input[name=name]");
    let btn = form.querySelector("button");
    name.value = data.name;
    btn.innerText = "Cập nhật";
    buttonupdate(APIUpdate, CUD);
};
const getCourse = (API, callback) => {
    fetch(API)
        .then((response) => response.json())
        .then(callback);
};

//CUD
const CUD = (method, data, API, callback) => {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(API, options)
        .then((response) => response.json())
        .then(callback);
};

const buttonCreate = (APIrender, callback) => {
    let btn = form.querySelector("button");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let nameRequest = form.querySelector("input[name=name]").value;
        let data = {
            name: nameRequest,
        };
        if (btn.innerText === "Xác nhận") {
            callback("POST", data, APIrender, getCourse(API, renderCourse));
        } else if (btn.innerText === "Cập nhật") {
            callback("PUT", data, APIrender, getCourse(API, renderCourse));
            btn.innerText = "Xác nhật";
        }
    });
};
const buttonupdate = (APIrender, callback) => {
    let btn = form.querySelector("button");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let nameRequest = form.querySelector("input[name=name]").value;
        let data = {
            name: nameRequest,
        };
        callback("PUT", data, APIrender, getCourse(API, renderCourse));
        btn.innerText = "Xác nhật";
    });
};

let AddEven = () => {
    const list_btn = DOM.querySelectorAll("a");
    list_btn.forEach((obj) => {
        obj.addEventListener("click", (e) => {
            e.preventDefault();
            APIUpdate = obj.href;
            if (obj.innerText === "Xóa") {
                CUD("Delete", {}, APIUpdate, getCourse(API, renderCourse));
            } else if (obj.innerText === "Cập nhật") {
                getCourse(APIUpdate, render_form);
            }
        });
    });
};

start();
