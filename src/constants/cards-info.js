import { v4 } from 'uuid';

export const CARDS_INFO = [
	{
		id: v4(),
		type: 'sedan',
		title: 'SEDANS',
		description:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		src: '/public/assets/images/icon-sedans.svg'
	},
	{
		id: v4(),
		type: 'suv',
		title: 'SUVS',
		description:
			'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		src: '/public/assets/images/icon-suvs.svg'
	},
	{
		id: v4(),
		type: 'luxury',
		title: 'LUXURY',
		description:
			'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
		src: '/public/assets/images/icon-luxury.svg'
	}
];
