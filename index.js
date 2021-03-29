const cors = require('cors');
const  express  =  require('express');
const  app  =  express();

app.use(cors());

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', function(req, res) {
    res.end(`Hi, PID: ${process.pid}`);
});


server.listen(process.env.PORT);
