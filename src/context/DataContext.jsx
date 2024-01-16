import { createContext, useContext, useState } from 'react';

const data = [
	{
		id: 100795229,
		from: 'Kalkulator OC/AC - Onet mailingi@onet.pl',
		sent_date: '2021-12-13 09:00:03',
		is_unread: false,
		subject: 'Zaoszczędź! OC już od 230 zł',
		snippet: '',
	},
	{
		id: 100795227,
		from: 'Walutomat - Onet mailingi@onet.pl',
		sent_date: '2021-12-13 09:00:02',
		is_unread: false,
		subject: 'Wymień walutę szybko i tanio',
		snippet: 'Odbierz 50% rabatu na wymianę online',
	},
];

const DataContext = createContext();

function DataProvider({ children }) {
	const [dataItems, setDataItems] = useState(data);
	const [currItem, setCurrItem] = useState({});

	function handleCheckItem(id) {
		setDataItems((dataItems) =>
			dataItems.map((item) =>
				item.id === id ? { ...item, is_unread: !item.is_unread } : item
			)
		);
	}

	function handleCurrItem(item) {
		setCurrItem(item);
	}

	return (
		<DataContext.Provider
			value={{
				dataItems,
				handleCheckItem,
				currItem,
				handleCurrItem,
				setCurrItem,
			}}>
			{children}
		</DataContext.Provider>
	);
}

function useData() {
	const context = useContext(DataContext);
	if (context === undefined)
		throw new Error('useData was used outside Provider');
	return context;
}

export { DataProvider, useData };
