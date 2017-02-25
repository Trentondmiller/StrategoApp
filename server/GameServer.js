const express = require('express')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

var http = require('http');

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static(__dirname + './dist'))

var server = app.listen(port, () => console.log('Stratego game server running on port:' + port + ' with a ' + delay/1000 + ' second delay'))
var connections = [];
var chatroom = {};

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

    console.log("Connection made: "  +  socket.id)
    
    connections.push(socket);

    console.log("Connections: "  +  connections)



    socket.once('disconnect', function() {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining.", connections.length);
    });

    socket.on('join', function(payload) {
        console.log("Member Joined: %s", payload);
    });

     socket.on('send-move', function(payload) {
        console.log("Move received from %s: %s, and emoji: %s", payload.xyStart, payload.xyEnd);
        socket.broadcast.emit('receive-message', payload);
    });
});