
// You can write more code here

/* START OF COMPILED CODE */

class PlayerButton extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 199, y ?? 264, texture || "Objects", frame ?? "Button Flame");

		this.scaleX = 0.4;
		this.scaleY = 0.4;

		/* START-USER-CTR-CODE */

		this.setInteractive();

		this.on("pointerdown", () => {

			this.setScale(0.35);

			if (this._actionCallback) {

				this._actionCallback();
			}
		});

		this.on("pointerup", () => {

			this.setScale(0.4);
		});

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	setActionCallback(callback) {

		this._actionCallback = callback;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
