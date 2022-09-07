import {useSession} from 'next-auth/react';
import Head from 'next/head';
import {useEffect} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import {Login} from '../components/Login';
import StyledButton from '../components/StyledButton';
import StyledWrapper from '../components/StyledWrapper';
import SVG from '../components/svgCollection';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const {data: session} = useSession();
	const categories = useStore(state => state.categories);
	const items = useStore(state => state.items);
	items.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
	const getItems = useStore(state => state.getItems);
	const checkItem = useStore(state => state.checkItem);
	const deleteItem = useStore(state => state.deleteItem);
	const getCategories = useStore(state => state.getCategories);
	const bookmarkCategory = useStore(state => state.bookmarkCategory);

	useEffect(() => {
		getItems(), getCategories();
	}, [getItems, getCategories]);

	if (session) {
		return (
			<>
				<Layout>
					<Head>
						<title key="title">just pack</title>
						<meta key="description" name="description" content="This is my project" />
					</Head>
					<StyledWrapper>
						<h1>just pack</h1>
						{categories
							.filter(category => category.isBookmarked)
							.map(category => {
								return (
									<div key={category._id} style={{width: '50%'}}>
										<h3>{category.category}</h3>
										{items
											.filter(item => item.category === category.category)
											.map(item => {
												return (
													<StyledLi key={item._id}>
														<label htmlFor="items" />
														<input
															type="checkbox"
															name="items"
															checked={item.isChecked}
															onChange={() => {
																checkItem(
																	item._id,
																	!item.isChecked
																);
															}}
														/>
														<span
															style={{
																textDecoration:
																	item.isChecked &&
																	'line-through',
																color:
																	item.isChecked && 'lightgrey',
															}}
														>
															{item.item}
														</span>
														<StyledTrashButton
															type="button"
															onClick={() => {
																deleteItem(item._id);
															}}
														>
															<SVG
																size="16px"
																variant="trash"
																color="grey"
																fill="white"
															/>
														</StyledTrashButton>
													</StyledLi>
												);
											})}
									</div>
								);
							})}
					</StyledWrapper>
					<StyledButton
						variant="reset"
						onClick={() => {
							categories.filter(category =>
								category.isBookmarked
									? bookmarkCategory(category._id, !category.isBookmarked)
									: ''
							),
								items.filter(item =>
									item.isChecked ? checkItem(item._id, !item.isChecked) : ''
								);
						}}
					>
						reset
					</StyledButton>
				</Layout>
			</>
		);
	} else return <Login />;
}

const StyledLi = styled.li`
	display: flex;
	align-items: center;
`;

const StyledTrashButton = styled.button`
	margin-top: 5px;
	transform: translate(0, -8%);
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;
