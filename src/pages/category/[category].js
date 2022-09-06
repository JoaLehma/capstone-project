import {useRouter} from 'next/router';
import {useEffect} from 'react';

import ItemsForm from '../../components/ItemsForm';
import ReturnButton from '../../components/ReturnButton';
import StyledWrapper from '../../components/StyledWrapper';
import useStore from '../../hooks/useStore';

export default function CategoryPage() {
	const router = useRouter();
	const categories = useStore(state => state.categories);
	const getCategories = useStore(state => state.getCategories);

	useEffect(() => {
		getCategories();
	}, [getCategories]);

	return (
		<>
			{categories
				.filter(category => category.category === router.query.category)
				.map(category => {
					return (
						<>
							<StyledWrapper>
								<h2>{category.category}</h2>
								<ReturnButton />
								<ItemsForm category={category.category} />
							</StyledWrapper>
						</>
					);
				})}
		</>
	);
}
