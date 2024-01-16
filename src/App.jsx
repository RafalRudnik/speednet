import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './Pages/Home';
import Items from './Pages/Items';
import Item from './Pages/Item';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/items',
				element: <Items />,
			},
			{
				path: '/items/:id',
				element: <Item />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
