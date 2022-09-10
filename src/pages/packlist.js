import {useSession} from 'next-auth/react';
import Head from 'next/head';
import {useEffect} from 'react';
import {useState} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import {Login} from '../components/Login';
import ResetModal from '../components/ResetModal';
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

	const [isShown, setIsShown] = useState(false);

	function handleVisibility() {
		setIsShown(!isShown);
	}

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
									<StyledDiv key={category._id}>
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
									</StyledDiv>
								);
							})}
					</StyledWrapper>
					<StyledButtonWrapper>
						{!isShown ? (
							<StyledButton variant="reset" onClick={handleVisibility}>
								reset
							</StyledButton>
						) : (
							''
						)}
						{isShown && (
							<ResetModal
								onCancel={handleVisibility}
								onReset={() => {
									categories.filter(category =>
										category.isBookmarked
											? bookmarkCategory(category._id, !category.isBookmarked)
											: ''
									),
										items.filter(item =>
											item.isChecked
												? checkItem(item._id, !item.isChecked)
												: ''
										);
									{
										handleVisibility();
									}
								}}
							/>
						)}
					</StyledButtonWrapper>
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

const StyledButtonWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	flex-direction: column;
	align-items: center;
	width: 375px;
	height: 130px;
	background-color: white;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 52%;
`;
