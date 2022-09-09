import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import styled from 'styled-components';

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
							<StyledWrapper key={category._id}>
								<h2>{category.category}</h2>
								<StyledButton variant="return">
									<Link href="/">
										<StyledAnchor>
											<SVG
												variant="return"
												size="24px"
												color="black"
												fill="transparent"
											/>
										</StyledAnchor>
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

const StyledAnchor = styled.a`
	text-decoration: none;
`;
