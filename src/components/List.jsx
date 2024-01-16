import { useData } from '../context/DataContext';
import ItemsChecked from './ItemsChecked';
import ListItem from './ListItem';

function List() {
	const { dataItems } = useData();

	return (
		<ul className='list'>
			<h2>Lista:</h2>
			{dataItems.map((item) => (
				<ListItem item={item} key={item.id} />
			))}

			<ItemsChecked />
		</ul>
	);
}

export default List;
