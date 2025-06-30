// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

const checkEmotion = async (knownEmotions, emotion) => {
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});

	return knownEmotions.has(emotion);
};

const speak = async (knownEmotions, newEmotion, phrase) => {
	if (!(await checkEmotion(knownEmotions, emotion))) {
		return Error(`Does not computer, I do not understand ${newEmotion}.`);
	}

	return `"${phrase}" (${newEmotion})`;
};

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
