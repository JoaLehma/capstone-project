import Image from 'next/image';
import {useEffect} from 'react';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

import LogoutButton from './LogoutButton';

export default function StyledForm() {
	const items = useStore(state => state.items);
	const getItems = useStore(state => state.getItems);
	const addItems = useStore(state => state.addItems);
	const deleteItem = useStore(state => state.deleteItem);
	const checkItem = useStore(state => state.checkItem);
	const falseFirst = items.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

	async function handleSubmit(event) {
		event.preventDefault();
		const item = event.target.elements.itemInput.value;
		addItems(item);
		event.target.reset();
	}

	useEffect(() => {
		getItems();
	}, [getItems]);

	return (
		<>
			<StyledlList role="list">
				{falseFirst.map(item => {
					return (
						<StyledList key={item._id}>
							<label htmlFor="items" />
							<input
								type="checkbox"
								name="items"
								checked={item.isChecked}
								onChange={() => {
									checkItem(item._id, !item.isChecked);
								}}
							/>
							<span
								style={{
									textDecoration: item.isChecked && 'line-through',
									color: item.isChecked && 'lightgrey',
								}}
							>
								{item.item}
							</span>
							<StyledButton
								type="button"
								onClick={() => {
									deleteItem(item._id);
								}}
							>
								<Image
									src="/trash.svg"
									alt="An SVG of trash can"
									width="16px"
									height="16px"
								/>
							</StyledButton>
						</StyledList>
					);
				})}
			</StyledlList>
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
				<button type="submit">Submit</button>
			</form>
			<LogoutButton />
		</>
	);
}

const StyledInput = styled.input`
	margin: 5px;
`;

const StyledlList = styled.ul`
	list-style: none;
`;

const StyledList = styled.li`
	display: flex;
	align-items: center;
`;

const StyledButton = styled.button`
	margin-top: 5px;
	transform: translate(0, -8%);
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;
