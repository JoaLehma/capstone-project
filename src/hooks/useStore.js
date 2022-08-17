import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		items: [
			{item: 'Zelt', id: nanoid(), isChecked: true},
			{item: 'Grill', id: nanoid(), isChecked: false},
			{item: 'Wein', id: nanoid(), isChecked: false},
			{item: 'noch mehr Wein', id: nanoid(), isChecked: false},
		],

		addItem: item => {
			set(state => {
				return {items: [...state.items, {item, id: nanoid()}]};
			});
		},
	};
});

export default useStore;
