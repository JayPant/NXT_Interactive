const colyseus = require('colyseus');
const express = require('express');
const http = require('http');
const MyRoom = require('./MyRoom');

const app = express();
const server = http.createServer(app);
const gameServer = new colyseus.Server({
    server: server
});

gameServer.define("room", MyRoom);

server.listen(2567, () => {
    console.log("Colyseus server listening on port 2567");
});
