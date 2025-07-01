export function runCommands() {
	// Declare your variables and runtime logic here! ✨

	let resourceToResupply: "food" | "water" | undefined = undefined;
	let food = 5;
	let water = 5;

	let command: "food" | "water" | "resupply" | undefined;

	const START_DAY = 1;
	const FINAL_DAY = 7;

	for (let time = START_DAY; time <= FINAL_DAY; time += 1) {
		let diceRoll = Math.floor(Math.random() * 6) + 1;

		switch (diceRoll) {
			case 1: {
				command = "food";
				break;
			}

			case 2: {
				command = "water";
				break;
			}

			default: {
				command = "resupply";
				break;
			}
		}

		switch (command) {
			case "food": {
				resourceToResupply = "food";
				break;
			}

			case "water": {
				resourceToResupply = "water";
				break;
			}

			default: {
				if (!resourceToResupply) {
					if (diceRoll % 2 === 0) {
						resourceToResupply = "food";
					} else {
						resourceToResupply = "water";
					}
				} else {
					switch (resourceToResupply) {
						case "food": {
							food += diceRoll;
							resourceToResupply = undefined;
							break;
						}

						case "water": {
							water += diceRoll;
							resourceToResupply = undefined;
							break;
						}
					}
				}
			}
		}

		food--;
		if (food === 0) {
			return false;
		}

		water--;
		if (water === 0) {
			return false;
		}
	}

	return true;
}
