import HeroList from '../components/HeroList';
import style from './DcPage.module.css';

const DcPage = o => {
	return (
		<div className={style.wrapper}>
			<HeroList publisher='DC Comics' />
		</div>
	);
};

export default DcPage;
