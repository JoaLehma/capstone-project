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

		addItem: item => {
			set(state => {
				return {items: [...state.items, {item, id: nanoid()}]};
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
