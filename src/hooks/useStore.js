import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		items: [
			{item: 'Zelt', id: nanoid(), isChecked: false},
			{item: 'Grill', id: nanoid(), isChecked: false},
			{item: 'Wein', id: nanoid(), isChecked: false},
			{item: 'noch mehr Wein', id: nanoid(), isChecked: false},
		],

		fetchItems: async url => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				set({fetchedItems: data});
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},

		addItem: item => {
			set(state => {
				return {items: [...state.items, {item, id: nanoid(), isChecked: false}]};
			});
		},
		deleteItem: id => {
			set(state => {
				return {items: state.items.filter(item => item.id !== id)};
			});
		},
		checkItem: id => {
			set(state => {
				return {
					items: state.items.map(item =>
						item.id === id ? {...item, isChecked: !item.isChecked} : item
					),
				};
			});
		},
	};
});

export default useStore;
