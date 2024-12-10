import styles from './card.module.css';

const Card = props => {
	return (
		<>
			<section className={`${styles.container} ${styles[props.type]}`}>
				<div className={`${styles.imageBox}`}>
					<div className={`${styles.circle} ${styles.colorSedan}`}></div>
					<img className={`${styles.carImage}`} src={props.src} alt='car' />
				</div>
				<span className={`${styles.title}`}>{props.title}</span>
				<span className={`${styles.description}`}>{props.description}</span>
				<div className={`${styles.button} ${styles.sedanButton}`}>
					<a className={`${styles[`button-${props.type}`]}`} href='#'>
						Learn More
					</a>
				</div>
			</section>
		</>
	);
};

export default Card;
