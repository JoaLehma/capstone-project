import styled from 'styled-components';

import useStore from '../hooks/useStore';

export default function StyledForm() {
	const items = useStore(state => state.items);
	const addItem = useStore(state => state.addItem);

	function handleSubmit(event) {
		event.preventDefault();
		const item = event.target.elements.itemInput.value;
		addItem(item);
		event.target.reset();
	}

	return (
		<>
			<StyledlList>
				{items.map(item => {
					return (
						<li key={item.id}>
							<input type="checkbox" />
							{item.item}
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
