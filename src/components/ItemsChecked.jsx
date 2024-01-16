import { useData } from '../context/DataContext';
import Button from '../ui/Button';

function ItemsChecked() {
	const { dataItems } = useData();

	if (!dataItems.length) return;
	const numChecked = dataItems.filter((item) => item.is_unread).length;

	return (
		<div className='items-checked'>
			<Button to='/'>Wróć</Button>
			{dataItems && (
				<p>
					Ilość elementów {dataItems.length}, zaznaczonych:{' '}
					<span>{numChecked}</span>
				</p>
			)}
		</div>
	);
}

export default ItemsChecked;
