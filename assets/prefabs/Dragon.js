
// You can write more code here

/* START OF COMPILED CODE */

class Dragon extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 337.26063100137173, y ?? 188.94787379972564, texture || "dragon", frame ?? "dragon/Flaming_000");

		/* START-USER-CTR-CODE */

		this.play("dragon - dragon/Moving Forward");

		this.scene.physics.add.existing(this);

		this.body.setCollideWorldBounds(true);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */	

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		if (!this.anims.isPlaying) {

			this.anims.play("dragon - dragon/Moving Forward");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
