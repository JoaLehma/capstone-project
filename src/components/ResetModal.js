import styled from 'styled-components';

import StyledButton from './StyledButton';

export default function ResetModal({onCancel, onReset}) {
	return (
		<StyledArticle>
			<h4>Are you sure you want to reset this packlist?</h4>
			<StyledDiv>
				<StyledButton onClick={onCancel}>cancel</StyledButton>
				<StyledButton type="button" onClick={onReset}>
					yes
				</StyledButton>
			</StyledDiv>
		</StyledArticle>
	);
}

const StyledArticle = styled.article`
	position: absolute;
	bottom: 90px;
	width: 375px;
	height: 100px;
	padding: 10px;
	border-radius: 20px;
	background-color: white;
	text-align: center;
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 0 110px 0 110px;
`;
