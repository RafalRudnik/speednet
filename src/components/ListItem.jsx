import { useData } from '../context/DataContext';
import Button from '../ui/Button';

function ListItem({ item }) {
	const { handleCheckItem, handleCurrItem } = useData();

	return (
		<li className={item.is_unread ? 'active' : ''}>
			<input
				type='checkbox'
				value={item.is_unread}
				onChange={() => handleCheckItem(item.id)}
				checked={item.is_unread}></input>
			<div>
				<h3>{item.subject}</h3>
				<p>{item.snippet}</p>
			</div>
			<Button to={`${item.id}`} handler={() => handleCurrItem(item)}>
				Szczegóły
			</Button>
		</li>
	);
}

export default ListItem;
