// server.js
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

//redirect / to our index.html file
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/users', function(req, res,next) {  
    res.sendFile(__dirname + '/public/users.html');
});
let list_chat = [];
//when a client connects, do this
io.on('connection', function(client) {
    console.log('Client connected...');
    //when the server receives clicked message, do this
    client.on('room_1', function(data) {
        list_chat.push(data)
        //send a message to ALL connected clients
        io.emit('room_reps', list_chat);
    });
});


//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
});