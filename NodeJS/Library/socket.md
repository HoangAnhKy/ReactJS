- Hàm cơ bản

```js
    // gửi tới server
    socket.emit("hello", "world", (response) => {
        console.log(response); // "got it"
    });
    
    // thêm thời gian chờ 
    socket.timeout(5000).emit("hello", "world", (err, response) => {
    if (err) {
        // the other side did not acknowledge the event in the given delay
    } else {
        console.log(response); // "got it"
    }

    // gửi tới group trong server news
    io.to("news").emit("hello");
});


```

```js
    // server nhận dữ liệu
    socket.on("hello", (arg, callback) => {
        console.log(arg); // "world"
        callback("got it");
    });
```

```js
    // phân vùng kết nối

    io.on("connection", (socket) => {
    // phòng cơ bản
    });

    io.of("/admin").on("connection", (socket) => {
    // phòng admin
    });


```