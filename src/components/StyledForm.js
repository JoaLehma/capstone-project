import {useState} from 'react';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

export default function StyledForm() {
	const [inputValue, setInputValue] = useState('');

	const items = useStore(state => state.items);
	const addItem = useStore(state => state.addItem);

	return (
		<>
			<ul>
				{items.map(item => {
					return <li key={item.id}>{item.item}</li>;
				})}
			</ul>
			<form
				onSubmit={event => {
					event.preventDefault();
					addItem(inputValue);
					setInputValue('');
				}}
			>
				<label>
					Item:
					<StyledInput
						required
						minLength="3"
						placeholder="don't forget me"
						value={inputValue}
						onChange={event => {
							setInputValue(event.target.value);
						}}
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
