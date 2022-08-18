import styled from 'styled-components';

import useStore from '../hooks/useStore';

export default function StyledForm() {
	const items = useStore(state => state.items);
	const addItem = useStore(state => state.addItem);
	const checkItem = useStore(state => state.checkItem);
	const falseFirst = items.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

	function handleSubmit(event) {
		event.preventDefault();
		const item = event.target.elements.itemInput.value;
		addItem(item);
		event.target.reset();
	}

	return (
		<>
			<StyledlList role="list">
				{falseFirst.map(item => {
					return (
						<li key={item.id}>
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
						</li>
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
