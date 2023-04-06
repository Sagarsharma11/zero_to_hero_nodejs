const socket = io();

socket.emit('testEvent', {message: 'Hello, Node.js!'});
console.log('js is running')