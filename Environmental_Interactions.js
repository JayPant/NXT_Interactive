var PowerUp = pc.createScript('powerUp');

// Initialize the power-up to interact with players
PowerUp.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

// Power-up effect (e.g., increase speed for 5 seconds)
PowerUp.prototype.onTriggerEnter = function(entity) {
    if (entity.name === "Avatar_1" || entity.name === "Avatar_2") {
        entity.script.movement.speed *= 2;  // Double the player's speed
        setTimeout(function() {
            entity.script.movement.speed /= 2;  // Reset after 5 seconds
        }, 5000);
        this.entity.destroy();  // Destroy power-up after use
    }
};
