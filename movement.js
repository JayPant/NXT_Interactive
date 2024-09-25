var Movement = pc.createScript('movement');

Movement.prototype.initialize = function() {
    this.speed = 5;
    this.grounded = true;

    this.entity.collision.on('collisionstart', function(result) {
        this.grounded = true;
    }, this);
};

Movement.prototype.update = function(dt) {
    var app = this.app;
    var direction = new pc.Vec3();

    // Keyboard controls
    if (app.keyboard.isPressed(pc.KEY_W)) {
        direction.z -= this.speed * dt;
    }
    if (app.keyboard.isPressed(pc.KEY_S)) {
        direction.z += this.speed * dt;
    }
    if (app.keyboard.isPressed(pc.KEY_A)) {
        direction.x -= this.speed * dt;
    }
    if (app.keyboard.isPressed(pc.KEY_D)) {
        direction.x += this.speed * dt;
    }

    this.entity.translate(direction);
};
