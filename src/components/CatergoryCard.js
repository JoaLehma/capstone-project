import {useRouter} from 'next/router';
import {useEffect} from 'react';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import {LogoutButton} from './StyledLogoutButton';
import SVG from './svgCollection';

export default function CategoryCard() {
	const router = useRouter();
	const categories = useStore(state => state.categories);
	const getCategories = useStore(state => state.getCategories);
	const addCategories = useStore(state => state.addCategories);
	const deleteCategory = useStore(state => state.deleteCategory);
	const bookmarkCategory = useStore(state => state.bookmarkCategory);

	async function handleSubmit(event) {
		event.preventDefault();
		const category = event.target.elements.categoryInput.value;
		addCategories(category);
		event.target.reset();
	}

	useEffect(() => {
		getCategories();
	}, [getCategories]);
	console.log(categories);

	return (
		<>
			<StyledlList role="list">
				{categories.map(category => {
					return (
						<StyledCard key={category._id}>
							<StyledBookmarkButton
								onClick={() => {
									bookmarkCategory(category._id, !category.isBookmarked);
								}}
							>
								<SVG
									size="20px"
									variant="bookmark"
									color="white"
									fill={category.isBookmarked ? 'white' : 'transparent'}
								/>
							</StyledBookmarkButton>
							<StyledCategoryName>{category.category}</StyledCategoryName>
							<StyledButtonWrapper>
								<StyledAddButton
									type="button"
									onClick={() => {
										router.push({
											pathname: `category/${category.category}`,
										});
									}}
								>
									Add items
								</StyledAddButton>
								<StyledTrashcanButton
									type="button"
									onClick={() => {
										deleteCategory(category._id);
									}}
								>
									<SVG size="20px" variant="trash" color="white" />
								</StyledTrashcanButton>
							</StyledButtonWrapper>
						</StyledCard>
					);
				})}
			</StyledlList>
			<StyledFormWrapper>
				<form aria-label="Create an Category" onSubmit={handleSubmit}>
					<label>
						Your trip:
						<StyledInput
							type="text"
							id="categoryInput"
							required
							name="categoryInput"
							autoComplete="off"
							minLength="3"
							placeholder="where to go?"
						/>
					</label>
					<StyledButton variant="submit" type="submit">
						Submit
					</StyledButton>
				</form>
				<LogoutButton />
			</StyledFormWrapper>
		</>
	);
}

const StyledlList = styled.ul`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	margin-top: 70px;
	padding: 0;
	list-style: none;
`;

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 275px;
	height: fit-content;
	margin-top: 20px;
	border-radius: 10px;
	background-color: #000;
`;

const StyledCategoryName = styled.h3`
	margin: 10px;
	color: white;
`;

const StyledBookmarkButton = styled.button`
	align-self: flex-end;
	margin-top: 5px;
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;

const StyledTrashcanButton = styled.button`
	margin-right: 1px;
	margin-bottom: -3px;
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;

const StyledButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 275px;
`;

const StyledAddButton = styled.button`
	margin: 10px;
	border: solid;
	border-width: 1px;
	border-radius: 5px;
	border-color: #fff;
	background-color: transparent;
	color: #fff;
	font-family: 'Rajdhani', sans-serif;
	&:hover {
		cursor: pointer;
	}
`;

const StyledFormWrapper = styled.div`
	display: flex;
	position: fixed;
	top: 500px;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	height: 300px;
	background-color: white;
`;
