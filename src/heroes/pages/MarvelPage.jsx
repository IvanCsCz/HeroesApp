import HeroList from '../components/HeroList';
import style from './MarvelPage.module.css';

const MarvelPage = () => {
	return (
		<div className={style.wrapper}>
			<HeroList publisher={'Marvel Comics'} />
		</div>
	);
};

export default MarvelPage;
