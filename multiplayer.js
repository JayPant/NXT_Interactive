var Multiplayer = pc.createScript('multiplayer');

// Initialize connection to Colyseus
Multiplayer.prototype.initialize = function() {
    var client = new Colyseus.Client('ws://localhost:2567');  // Colyseus server address

    client.joinOrCreate("room").then(room => {
        console.log("Joined room:", room.sessionId);

        // Store room and session data
        this.room = room;
        this.sessionId = room.sessionId;

        // Listen for other players' movements
        room.onMessage("playerMove", (data) => {
            if (data.sessionId !== room.sessionId) {  // Only move other players
                if (!this.otherPlayers[data.sessionId]) {
                    this.otherPlayers[data.sessionId] = { entity: this.app.root.findByName(data.name) };
                }
                this.otherPlayers[data.sessionId].targetPos = new pc.Vec3(data.x, data.y, data.z);
            }
        });
    }).catch(e => {
        console.error("Failed to join room:", e);
    });
};

Multiplayer.prototype.update = function(dt) {
    var pos = this.entity.getPosition();

    // Send position data to the server
    if (this.room && this.entity.name === this.playerName) {
        this.room.send("move", {
            sessionId: this.sessionId,
            name: this.entity.name,  // Send the avatar name
            x: pos.x,
            y: pos.y,
            z: pos.z
        });
    }

    // Smoothly update positions of other players
    for (var sessionId in this.otherPlayers) {
        var otherPlayer = this.otherPlayers[sessionId];
        if (otherPlayer.entity && otherPlayer.targetPos) {
            var currentPos = otherPlayer.entity.getPosition();
            var newPos = currentPos.lerp(currentPos, otherPlayer.targetPos, this.interpolationSpeed);
            otherPlayer.entity.setPosition(newPos);
        }
    }
};
