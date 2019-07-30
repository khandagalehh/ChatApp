const express = require('express');  
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')()


// serve the public directories. 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, + 'public/index.html'));
})

io.on('conection', socket => {
    console.log('a user connected');
});

app.listen(3000,() => {
    console.log('wheeee listening on port 3000');
});
