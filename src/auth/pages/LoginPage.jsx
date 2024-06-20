import { useNavigate } from 'react-router-dom';
import style from './LoginPage.module.css';

const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/', { replace: true });
	};

	return (
		<div className={style.wrapper}>
			<h1>LoginPage</h1>

			<button onClick={handleLogin} className={style.loginBtn}>
				Login
			</button>
		</div>
	);
};

export default LoginPage;
