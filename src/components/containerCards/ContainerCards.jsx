import { CARDS_INFO } from '../../constants/cards-info';
import Card from '../card/Card';
import styles from './containerCards.module.css';

const ContainerCards = () => {
	return (
		<>
			<div className={styles.container}>
				{CARDS_INFO.map(cardInfo => {
					return (
						<Card
							key={cardInfo.id}
							type={cardInfo.type}
							title={cardInfo.title}
							description={cardInfo.description}
							src={cardInfo.src}
						></Card>
					);
				})}
			</div>
		</>
	);
};

export default ContainerCards;
