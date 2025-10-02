const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Create a PeerServer instance
const peerServer = ExpressPeerServer(server, {
    debug: true,
});

// Serve static files from the public directory
app.use(express.static('public'));

// Attach PeerServer to the Express app
app.use('/peerjs', peerServer);
