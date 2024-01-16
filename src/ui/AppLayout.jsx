import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function AppLayout() {
	return (
		<>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
		</>
	);
}

export default AppLayout;
