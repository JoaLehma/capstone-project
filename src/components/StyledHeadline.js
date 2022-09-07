import styled from 'styled-components';

export default function StyledHeadline() {
	return (
		<StyledHeadlineWrapper>
			<StyledH1>just pack</StyledH1>
		</StyledHeadlineWrapper>
	);
}

const StyledH1 = styled.h1``;

const StyledHeadlineWrapper = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	justify-content: center;
	width: 375px;
	height: 60px;
	background-color: white;
`;
