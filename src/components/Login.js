import {signIn} from 'next-auth/react';
import styled from 'styled-components';

import StyledButton from './StyledButton';
import StyledWrapper from './StyledWrapper';

export function Login() {
	return (
		<>
			<StyledWrapper>
				<h1>just pack</h1>
				<StyledLoginText>
					never <br /> ever <br /> forget <br /> anything <br /> again!
				</StyledLoginText>
				<StyledButton variant="login" onClick={() => signIn()}>
					Sign in
				</StyledButton>
			</StyledWrapper>
		</>
	);
}

const StyledLoginText = styled.h2`
	font-size: 60px;
	text-align: center;
`;
