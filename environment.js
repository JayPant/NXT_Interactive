var Teleport = pc.createScript('teleport');

// Teleports the player when they enter the portal
Teleport.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

Teleport.prototype.onTriggerEnter = function(otherEntity) {
    if (otherEntity.name === "Avatar_1" || otherEntity.name === "Avatar_2") {
        otherEntity.setPosition(10, 0, 10);  // Teleport the player to a new position
    }
};
