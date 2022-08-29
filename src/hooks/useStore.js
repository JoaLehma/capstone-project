import axios from 'axios';
import create from 'zustand';

const useStore = create(set => {
	return {
		items: [],
		getItems: async () => {
			console.log('fetching items');
			const response = await axios.get('/api/connect');
			const result = await response.data;

			set(() => ({items: result}));
		},

		addItems: async item => {
			console.log('adding items');
			try {
				const response = await fetch('/api/connect', {
					method: 'POST',
					body: JSON.stringify({item}),
				});
				const result = await response.json();
				set(() => ({items: result.items}));
				return result;
			} catch (error) {
				console.error(error);
			}
		},

		deleteItem: async id => {
			console.log('delete items');
			try {
				const response = await fetch(`/api/${id}`, {
					method: 'DELETE',
				});
				const result = await response.json();
				set(() => ({items: result.items}));
				return result;
			} catch (error) {
				console.error(error);
			}
		},

		// deleteItem: async itemId => {
		// 	console.log('delete item');
		// 	try {
		// 		const response = await fetch(`/api/${itemId}`, {
		// 			method: 'DELETE',
		// 		});
		// 		const deletedItem = await response.json();
		// 		set(() => ({items: deletedItem.items}));
		// 		return deletedItem;
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// },
	};
});

export default useStore;
