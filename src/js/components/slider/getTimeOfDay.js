const greetingTranslations = {
	ночи: 'night',
	утро: 'morning',
	дня: 'afternoon',
	вечер: 'evening'
};

export const translateGreeting = (greetingText) => {
	return greetingTranslations[greetingText];
};