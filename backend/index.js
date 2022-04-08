const http = require('http');
const app = require('./app');
const {initializeSocket} = require('./web-socket')

const httpServer = http.createServer(app);

initializeSocket(httpServer)

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

