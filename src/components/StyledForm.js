import {useState} from 'react';

export default function StyledForm() {
	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState([
		{
			item: 'Zelt',
		},
		{
			item: 'Wanderschuhe',
		},
		{
			item: 'Badehose',
		},
	]);

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				setItems([...items, {item: inputValue}]);
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
	);
}
