import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

import ItemsForm from '../../components/ItemsForm';
import StyledButton from '../../components/StyledButton';
import StyledWrapper from '../../components/StyledWrapper';
import SVG from '../../components/svgCollection';
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
								<StyledButton variant="return">
									<Link href="/">
										<a>
											<SVG
												variant="return"
												size="24px"
												color="black"
												fill="transparent"
											/>
										</a>
									</Link>
								</StyledButton>
								<ItemsForm category={category.category} />
							</StyledWrapper>
						</>
					);
				})}
		</>
	);
}
