let io;

function start(http){
    io = require("socket.io")(http);
}

io.on('connection', (socket) => {
    console.log('connected');
});

module.exports = start;