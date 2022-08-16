import {useState} from 'react';

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
					<input
						required
						minLength="3"
						placeholder="what do you want to take?"
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
