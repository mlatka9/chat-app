const { Server } = require("socket.io");

let io;

const initializeSocket = (httpServer) => {

    io = new Server(httpServer, {
        cors: {
            origin: '*',
          }
    });
    
    io.on("connection", (socket) => {
        console.log('some1 connected')
        socket.on('disconnect', () => {
            console.log('some1 disconnected')
        });
        socket.on('join room', (channelId) => {
            socket.join(channelId)
            console.log(`${socket.id} joined channel ${channelId}`)
        });
        
    });
}

const getIO = () => {
    return io;
}


module.exports = {getIO, initializeSocket}