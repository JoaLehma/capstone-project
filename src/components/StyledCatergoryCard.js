import styled from 'styled-components';

import {Trashcan} from './Buttons/Button';

export default function StyledCategoryCard() {
	return (
		<Card>
			<button>bookmark</button>
			<h3>Mountainbike</h3>
			<button>Add items</button>
			<Trashcan />
		</Card>
	);
}

const Card = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 200px;
	height: fit-content;
	padding: 10px;
	border-width: 1px;
	border-style: solid;
	border-radius: 20px;
	border-color: black;
`;
