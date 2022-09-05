import {useRouter} from 'next/router';
import {useEffect} from 'react';

import useStore from '../../hooks/useStore';

export default function CategoryPage() {
	const router = useRouter();
	const categories = useStore(state => state.categories);
	const getCategories = useStore(state => state.getCategories);

	console.log(categories);

	useEffect(() => {
		getCategories();
	}, [getCategories]);

	return (
		<>
			{categories
				.filter(category => category.category === router.query.category)
				.map(category => {
					return <p key={category._id}>{category.category}</p>;
				})}
		</>
	);
}
