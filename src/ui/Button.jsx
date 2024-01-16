import { Link } from 'react-router-dom';

function Button({ children, to, handler }) {
	return (
		<Link to={to} className='button' onClick={handler}>
			{children}
		</Link>
	);
}

export default Button;
