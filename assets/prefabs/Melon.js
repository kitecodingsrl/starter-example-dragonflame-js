
// You can write more code here

/* START OF COMPILED CODE */

class Melon extends BaseObject {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 384, y ?? 162, texture || "Objects", frame ?? "watermelon-1");

		/* START-USER-CTR-CODE */

		this.burning = false;

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */	

	playDefaultAnimation() {

		this.anims.play("Objects - watermelon");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
