import { Link } from 'react-router-dom';
import style from './HeroCard.module.css';

const HeroCard = ({ id, superhero, alterEgo, firstAppearance }) => {
	const heroImgUrl = '../../../assets/heroes/';
	return (
		<div className={style.wrapper}>
			<img
				src={`${heroImgUrl}${id}.jpg`}
				className={style.cardImg}
				alt={`${superhero} image`}
			/>
			<div className={style.cardBody}>
				<h4 className={style.cardTitle}>{superhero}</h4>
				<p className={style.cardText}>{alterEgo}</p>
				<small className={`${style.cardText} ${style.textMuted}`}>
					{firstAppearance}
				</small>
				<Link to={'/hero'} className={style.link}>
					Más...
				</Link>
			</div>
		</div>
	);
};

export default HeroCard;
