import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={style.navbar}>
			<Link className={style.homeLink} to='/'>
				Asociaciones
			</Link>

			<div className={style.links}>
				<NavLink
					className={({ isActive }) => `${isActive ? style.active : ''}`}
					to='/marvel'
				>
					Marvel
				</NavLink>

				<NavLink
					className={({ isActive }) => `${isActive ? style.active : ''}`}
					to='/dc'
				>
					DC
				</NavLink>
			</div>

			<div>
				<span className={style.userName}>Ivan</span>
				<button className={style.logoutBtn}>Logout</button>
			</div>
		</nav>
	);
};

export default Navbar;
