import axios from 'axios';
import create from 'zustand';

const useStore = create(set => {
	return {
		categories: [],
		items: [],
		getItems: async () => {
			console.log('fetching items');
			const response = await axios.get('/api/restricted');
			const result = await response.data;

			set(() => ({items: result}));
		},

		addItems: async (item, category) => {
			console.log('adding items');
			console.log(category);
			try {
				const response = await fetch('/api/restricted', {
					method: 'POST',
					body: JSON.stringify({item, category}),
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

		checkItem: async (id, isChecked) => {
			console.log('check item');
			try {
				const response = await fetch(`/api/${id}`, {
					method: 'PUT',
					body: JSON.stringify({isChecked}),
				});
				const result = await response.json();
				set(() => ({items: result.items}));
				return result;
			} catch (error) {
				console.error(error);
			}
		},

		getCategories: async () => {
			console.log('fetching categories');
			const response = await axios.get('/api/category/category');
			const result = await response.data;

			set(() => ({categories: result}));
		},

		addCategories: async category => {
			console.log('adding categories');
			try {
				const response = await fetch('/api/category/category', {
					method: 'POST',
					body: JSON.stringify({category}),
				});
				const result = await response.json();
				set(() => ({categories: result.categories}));
				return result;
			} catch (error) {
				console.error(error);
			}
		},

		deleteCategory: async id => {
			console.log('delete categories');
			try {
				const response = await fetch(`/api/category/${id}`, {
					method: 'DELETE',
				});
				const result = await response.json();
				set(() => ({categories: result.categories}));
				return result;
			} catch (error) {
				console.error(error);
			}
		},
	};
});

export default useStore;
