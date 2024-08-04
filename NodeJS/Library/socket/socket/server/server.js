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
let clickCount = 0;
//when a client connects, do this
io.on('connection', function(client) {
    console.log('Client connected...');
    //when the server receives clicked message, do this
    client.on('clicked', function(data) {
        clickCount++;
        //send a message to ALL connected clients
        io.emit('buttonUpdate', clickCount);
    });
});


//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
});