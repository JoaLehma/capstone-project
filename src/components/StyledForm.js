import Image from 'next/image';
import styled from 'styled-components';

import useFetch from '../hooks/useFetch';
import useStore from '../hooks/useStore';

export default function StyledForm() {
	const items = useStore(state => state.items);
	const addItem = useStore(state => state.addItem);
	const checkItem = useStore(state => state.checkItem);
	const deleteItem = useStore(state => state.deleteItem);
	const falseFirst = items.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
	const fetchApi = useFetch();

	async function handleSubmit(event) {
		event.preventDefault();
		const item = event.target.elements.itemInput.value;
		await fetchApi('/api/createItem', {
			method: 'POST',
			body: JSON.stringify({item}),
		});

		addItem(item);
		event.target.reset();
	}

	return (
		<>
			<StyledlList role="list">
				{falseFirst.map(item => {
					return (
						<StyledList key={item.id}>
							<input
								type="checkbox"
								checked={item.isChecked}
								onChange={() => {
									checkItem(item.id);
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
									deleteItem(item.id);
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
		</>
	);
}

const StyledInput = styled.input`
	margin: 5px;
`;

const StyledlList = styled.ul`
	list-style: none;
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

const StyledList = styled.li`
	display: flex;
	align-items: center;
`;
