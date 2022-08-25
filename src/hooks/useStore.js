import axios from 'axios';
import create from 'zustand';

const useStore = create((set, get) => {
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
				const result = await fetch('/api/connect', {
					method: 'POST',
					body: JSON.stringify({item}),
				});
				get().getItems();

				return await result.json();
			} catch (error) {
				console.error(error);
			}
		},
	};
});

export default useStore;
