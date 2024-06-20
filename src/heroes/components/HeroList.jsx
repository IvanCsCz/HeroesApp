import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
	const filteredHeroes = getHeroesByPublisher(publisher);

	return (
		<>
			{filteredHeroes.map(hero => (
				<HeroCard key={hero.id} {...hero}>
					{hero.superhero}
				</HeroCard>
			))}
		</>
	);
};

export default HeroList;
