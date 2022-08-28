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

		deleteItem: itemId =>
			set(state => {
				const items = state.items.filter(function (item) {
					return item.itemId !== itemId;
				});
				return {items: items};
			}),
	};
});

export default useStore;
