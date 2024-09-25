var FollowCamera = pc.createScript('followCamera');

// Set up the camera to follow the avatar
FollowCamera.prototype.initialize = function() {
    this.target = this.app.root.findByName('Avatar_1');  // Change 'Avatar_1' to the name of the player entity
    this.offset = new pc.Vec3(0, 5, -10);  // Offset for third-person view
};

// Update the camera position every frame
FollowCamera.prototype.update = function(dt) {
    if (this.target) {
        var targetPos = this.target.getPosition();
        var newPos = targetPos.clone().add(this.offset);
        this.entity.setPosition(newPos);
        this.entity.lookAt(targetPos);  // Make the camera look at the player
    }
};
