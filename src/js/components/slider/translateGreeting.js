const greetingTranslations = {
	ночи: 'night',
	утро: 'morning',
	день: 'afternoon',
	вечер: 'evening'
};

export const translateGreeting = (greetingText) => greetingTranslations[greetingText];