class Spot {
	constructor(x, y, num) {
		this.x = x;
		this.y = y;

		// this.letter = hex(num, 2).slice(0, 1);
		this.letter = "Hellow";
		this.color = mario.get(this.x + spotWidth / 4, this.y + spotHeight / 2);
	}

	// fill, background, tint
	draw(fillColor, backColor, tintColor, drawText) {

		// TINT
		if (tintColor === 0) {
			tint(random(255), random(255), random(255), random(255));
			image(mario.get(this.x - .5, this.y - .5, spotWidth + 1, spotHeight + 1), this.x, this.y);
		} else if (tintColor === 1) {
			tint(this.color);
			image(mario.get(this.x - .5, this.y - .5, spotWidth + 1, spotHeight + 1), this.x, this.y);
		} else if (tintColor !== undefined) {
			tint(tintColor);
			image(mario.get(this.x - .5, this.y - .5, spotWidth + 1, spotHeight + 1), this.x, this.y);
		}

		if (drawText) {
			fill(BACKGROUND);
			noStroke();
			rect(this.x-.5,this.y-.5,spotWidth+1,spotHeight+1);
		}

		// FILL
		if (fillColor === 0) {
			fill(random(255), random(255), random(255), random(255));
		} else if (fillColor === 1) {
			fill(this.color);
		} else if (fillColor !== undefined) {
			fill(fillColor);
		}

		// TEXT
		if (drawText) {
			stroke(OUTLINE);
			text(this.letter, this.x + letterSize / 7, this.y + letterSize);
		}

		// RANDOM SPRITE (eventually, possibly, maybe? ...)

	}

	updateValue(num) {
		this.letter = hex(num || random(255), 2).slice(0, 1);
	}
}






//
