import styled from 'styled-components';

import {LogoutButton} from './StyledLogoutButton';
import SVG from './svgCollection';

export default function StyledCategoryCard() {
	return (
		<>
			<Card>
				<Bookmark>
					<SVG size="20px" variant="bookmark" color="white" />
				</Bookmark>
				<CategoryName>Mountainbike</CategoryName>
				<ButtonWrapper>
					<AddButton>Add items</AddButton>
					<Trashcan>
						<SVG size="20px" variant="trash" color="white" />
					</Trashcan>
				</ButtonWrapper>
			</Card>
			<FormWrapper>
				<form aria-label="Create an Category">
					<label>
						Category:
						<StyledInput
							type="text"
							id="categoryInput"
							required
							name="categoryInput"
							autoComplete="off"
							minLength="3"
							placeholder="create an item-card"
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
				<LogoutButton />
			</FormWrapper>
		</>
	);
}

const Card = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 200px;
	height: fit-content;
	margin-top: 20px;
	border-radius: 10px;
	background-color: #000;
`;

const CategoryName = styled.h3`
	margin: 10px;
	color: white;
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

const Trashcan = styled.button`
	margin-right: 1px;
	margin-bottom: -3px;
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 200px;
`;

const AddButton = styled.button`
	margin: 10px;
	border: solid;
	border-width: 1px;
	border-radius: 5px;
	border-color: #fff;
	background-color: transparent;
	color: #fff;
	font-family: 'Rajdhani', sans-serif;
	&:hover {
		cursor: pointer;
	}
`;

const StyledInput = styled.input`
	margin: 20px 5px 5px 5px;
`;

const FormWrapper = styled.div`
	display: flex;
	position: fixed;
	top: 480px;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	height: fit-content;
	background-color: white;
`;
