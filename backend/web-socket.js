const { Server } = require('socket.io');

let io;

const initializeSocket = (httpServer) => {

	io = new Server(httpServer, {
		cors: {
			origin: '*',
		}
	});
    
	io.on('connection', (socket) => {
		console.log(`${socket.id} connected`);
		socket.on('disconnect', () => {
			console.log(`${socket.id} disconnected`);
		});
		socket.on('join room', (channelId) => {
			socket.join(channelId);
			console.log(`${socket.id} joined channel ${channelId}`);
		});  
	});
};

const getIO = () => {
	return io;
};


module.exports = {getIO, initializeSocket};