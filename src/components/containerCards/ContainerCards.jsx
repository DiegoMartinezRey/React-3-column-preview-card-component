import Card from '../card/Card';
import styles from './containerCards.module.css';

const ContainerCards = () => {
	const cars = [
		{
			type: 'sedan',
			title: 'SEDANS',
			description:
				'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
			src: '/public/assets/images/icon-sedans.svg'
		},
		{
			type: 'suv',
			title: 'SUVS',
			description:
				'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
			src: '/public/assets/images/icon-suvs.svg'
		},
		{
			type: 'luxury',
			title: 'LUXURY',
			description:
				'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
			src: '/public/assets/images/icon-luxury.svg'
		}
	];

	return (
		<>
			<div className={styles.container}>
				<Card
					type={cars[0].type}
					title={cars[0].title}
					description={cars[0].description}
					src={cars[0].src}
				></Card>
				<Card
					type={cars[1].type}
					title={cars[1].title}
					description={cars[1].description}
					src={cars[1].src}
				></Card>
				<Card
					type={cars[2].type}
					title={cars[2].title}
					description={cars[2].description}
					src={cars[2].src}
				></Card>
			</div>
		</>
	);
};

export default ContainerCards;
