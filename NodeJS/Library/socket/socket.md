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

    // gửi dữ liệu qua room
    let list_chat = [];
    io.on('connection', function(client) {
        console.log('Client connected...');
        // join room and send data
        client.on('send_message', function(data) {
            list_chat.push(data)
            client.join(data.room);
            io.to(data.room).emit('room_reps', list_chat);
        });

        // out room
        client.on('leave', function(data) {
            client.leave(data.room);
        });
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