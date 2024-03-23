const greetingTranslations = {
	ночи: 'night',
	утро: 'morning',
	день: 'afternoon',
	вечер: 'evening'
};

export const translateGreeting = (greetingText) => {
	return greetingTranslations[greetingText];
};