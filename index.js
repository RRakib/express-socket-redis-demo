const cors = require('cors');
const  express  =  require('express');
const  app  =  express();

app.use(cors());

app.get('/', (req, res) => {
    res.end(`Hi, PID: ${process.pid}`);
});

app.listen(process.env.PORT);

console.log(`Server running on ${process.env.PORT} port, PID: ${process.pid}`);
