// Put your announceMachines function here! ✨

const announceMachines = (announce, ...machines) => {
	let labelCount = 0;

	const getLabel = (machine) => {
		if (machine.label) {
			labelCount += 1;
			return machine.label;
		}
		return `Make: ${machine.make}; Model: ${machine.model}`;
	};

	for (const machine of machines) {
		announce(getLabel(machine));
	}

	return labelCount;
};

module.exports.announceMachines = announceMachines;
