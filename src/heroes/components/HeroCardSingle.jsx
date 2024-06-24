import { useNavigate } from 'react-router-dom';
import style from './HeroCardSingle.module.css';

const HeroCardSingle = ({
	superhero,
	alterEgo,
	publisher,
	firstAppearance,
	characters,
	id
}) => {
	const navigate = useNavigate();

	const handleNavigateBack = () => {
		navigate(-1);
	};

	const heroImgUrl = '../../../assets/heroes/';

	return (
		<div className={style.wrapper}>
			<img
				src={`${heroImgUrl}${id}.jpg`}
				className={style.cardImg}
				alt={`${superhero} image`}
			/>
			<div className={style.cardBody}>
				<h3 className={style.cardTitle}>{superhero}</h3>
				<p className={style.cardText}>
					<b>Alter ego: </b>
					{alterEgo}
				</p>
				<p className={style.cardText}>
					<b>Publisher: </b>
					{publisher}
				</p>
				<p className={style.cardText}>
					<b>First appearance: </b>
					{firstAppearance}
				</p>
				<p className={style.cardTextCharacterList}>Characters: </p>
				<p className={style.cardTextCharacter}>{characters}</p>
				<button onClick={handleNavigateBack}>Regresar</button>
			</div>
		</div>
	);
};

export default HeroCardSingle;
