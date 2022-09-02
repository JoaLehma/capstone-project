import styled from 'styled-components';

export default function StyledCategoryCard() {
	return (
		<Card>
			<button>bookmark</button>
			<h3>Mountainbike</h3>
			<button>Add items</button>
			<button>Delete</button>
		</Card>
	);
}

const Card = styled.article`
	display: flex;
	flex-direction: column;
	width: 200px;
	height: 100px;
	padding: 10px;
	border-width: 1px;
	border-style: solid;
	border-radius: 20px;
	border-color: black;
`;
