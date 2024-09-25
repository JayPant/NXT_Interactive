const { Room } = require('colyseus');

class MyRoom extends Room {
    onCreate(options) {
        this.setState({ players: {} });

        this.onMessage("move", (client, message) => {
            const player = this.state.players[client.sessionId];
            if (player) {
                player.x = message.x;
                player.y = message.y;
                player.z = message.z;

                this.broadcast("playerMove", {
                    sessionId: client.sessionId,
                    name: message.name,  // Avatar_1 or Avatar_2
                    x: message.x,
                    y: message.y,
                    z: message.z
                });
            }
        });
    }

    onJoin(client) {
        console.log(client.sessionId, "joined");
        this.state.players[client.sessionId] = { x: 0, y: 0, z: 0 };  // Initialize player position
    }

    onLeave(client) {
        delete this.state.players[client.sessionId];
    }
}

module.exports = MyRoom;
