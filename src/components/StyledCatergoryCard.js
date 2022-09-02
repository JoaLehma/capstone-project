import Image from 'next/image';
import styled from 'styled-components';

import {Trashcan} from './Buttons/Button';

export default function StyledCategoryCard() {
	return (
		<Card>
			<Bookmark>
				<Image
					src="/bookmark.svg"
					alt="An SVG of an bookmark icon"
					width="24px"
					height="24px"
				/>
			</Bookmark>
			<CategoryName>Mountainbike</CategoryName>
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
	border-width: 1px;
	border-style: solid;
	border-radius: 20px;
	border-color: black;
`;

const CategoryName = styled.h3`
	margin: 5px;
`;

const Bookmark = styled.button`
	align-self: flex-end;
	margin-top: 5px;
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;
