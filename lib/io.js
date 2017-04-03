

function start(http){
    let io = require("socket.io")(http);

    io.on('connection', (socket) => {
        console.log('connected');

        socket.on('disconnect', function(msg){
            console.log(msg);
        });

        socket.on('message', function(){

        });
    });
}

module.exports = start;