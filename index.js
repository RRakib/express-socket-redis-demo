const cors = require('cors');
const express  =  require('express');
import redisAdapter from 'socket.io-redis';


const  app  =  express();

app.use(cors());

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        credentials: true
    }
});

io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.join(`room${process.env.PORT}`);
    socket.broadcast.emit('hello', 'to all clients except sender');
    socket.to('room8081').emit('hello', "to all clients in 'room42' room except sender");
    socket.on("fontfnt", (msg) => {
        console.log(msg, 27);
    })
});

app.get('/', function(req, res) {
    res.end(`Hi, PID: ${process.pid}`);
});


server.listen(process.env.PORT);
