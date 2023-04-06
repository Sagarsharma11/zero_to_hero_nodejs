const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('testEvent', (data) => {
    console.log('testEvent received:', data);
    io.emit('testEvent',data);
  });
});

http.listen(port, () => {

  console.log('Server running on port 8000');
});