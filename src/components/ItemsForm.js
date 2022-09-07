import {useEffect} from 'react';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import {LogoutButton} from './StyledLogoutButton';
import SVG from './svgCollection';

export default function ItemsForm(category) {
	const items = useStore(state => state.items);
	const getItems = useStore(state => state.getItems);
	const addItems = useStore(state => state.addItems);
	const deleteItem = useStore(state => state.deleteItem);

	async function handleSubmit(event) {
		event.preventDefault();
		const item = event.target.elements.itemInput.value;
		addItems(item, category.category);
		event.target.reset();
	}

	useEffect(() => {
		getItems();
	}, [getItems]);

	return (
		<>
			<StyledList role="list">
				{items
					.filter(item => item.category === category.category)
					.map(item => {
						return (
							<StyledLi key={item._id}>
								<label htmlFor="items" />
								<span>{item.item}</span>
								<StyledTrashButton
									type="button"
									onClick={() => {
										deleteItem(item._id);
									}}
								>
									<SVG size="16px" variant="trash" color="grey" fill="white" />
								</StyledTrashButton>
							</StyledLi>
						);
					})}
			</StyledList>
			<FormWrapper>
				<form aria-label="Add an item" onSubmit={handleSubmit}>
					<label>
						Item:
						<StyledInput
							type="text"
							id="itemInput"
							required
							name="itemInput"
							autoComplete="off"
							minLength="3"
							placeholder="don't forget me"
						/>
					</label>
					<StyledButton varian="submit" type="submit">
						Submit
					</StyledButton>
				</form>
				<LogoutButton />
			</FormWrapper>
		</>
	);
}

const StyledList = styled.ul`
	list-style: none;
`;

const StyledLi = styled.li`
	display: flex;
	align-items: center;
	margin-right: 20px;
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

const FormWrapper = styled.div`
	display: flex;
	position: fixed;
	top: 500px;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	height: fit-content;
	background-color: white;
`;
