import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		items: [
			{item: 'Zelt', id: nanoid()},
			{item: 'Grill', id: nanoid()},
			{item: 'Wein', id: nanoid()},
			{item: 'noch mehr Wein', id: nanoid()},
		],
		addItem: item => {
			set(state => {
				return {items: [...state.items, {item, id: nanoid()}]};
			});
		},
	};
});

export default useStore;
