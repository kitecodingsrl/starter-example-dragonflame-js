
// You can write more code here

/* START OF COMPILED CODE */

class Bomb extends BaseObject {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 405, y ?? 230, texture || "Objects", frame ?? "bomb-1");

		this.setOrigin(0.5, 1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	playDefaultAnimation() {

		this.anims.play("Objects - bomb");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
