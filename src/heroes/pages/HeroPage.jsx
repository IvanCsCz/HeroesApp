import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import HeroCardSingle from '../components/HeroCardSingle';
import { getHeroeById } from '../helpers/getHeroeById';

const HeroPage = () => {
	const { heroId } = useParams();

	const hero = useMemo(() => getHeroeById(heroId), [heroId]);

	if (!hero) return <Navigate to='/marvel' />;

	return <HeroCardSingle {...hero} />;
};

export default HeroPage;
