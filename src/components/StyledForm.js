import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function StyledForm() {
	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState([
		{
			id: nanoid(),
			item: 'Zelt',
		},
		{
			id: nanoid(),
			item: 'Wanderschuhe',
		},
		{
			id: nanoid(),
			item: 'Badehose',
		},
	]);
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
					setItems([...items, {item: inputValue, id: nanoid()}]);
					setInputValue('');
				}}
			>
				<label>
					Item:
					<input
						required
						minLength="3"
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
