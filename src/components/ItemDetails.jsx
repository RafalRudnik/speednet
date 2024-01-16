import { useData } from '../context/DataContext';
import Button from '../ui/Button';

function ItemDetails() {
	const { currItem, setCurrItem } = useData();

	return (
		<div className='item'>
			<p>
				Id: <span>{currItem.id}</span>
			</p>
			<p>
				from: <span>{currItem.from}</span>
			</p>
			<p>
				sent date: <span>{currItem.sent_date}</span>
			</p>
			<p>
				is unread: <span>{currItem.is_unread ? 'Tak' : 'Nie'}</span>
			</p>
			<h2>{currItem.subject}</h2>
			<p>{currItem.snippet}</p>
			<Button to='/items' handler={() => setCurrItem(null)}>
				Wróć
			</Button>
		</div>
	);
}

export default ItemDetails;
