const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');

  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected');
  });

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
    