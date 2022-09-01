import {signIn} from 'next-auth/react';
import styled from 'styled-components';

import StyledWrapper from './StyledWrapper';

export function Login() {
	return (
		<>
			<StyledWrapper>
				<h1>just pack</h1>
				<StyledLoginText>
					never <br /> ever <br /> forget <br /> anything <br /> again!
				</StyledLoginText>
				<button onClick={() => signIn()}>Sign in</button>
			</StyledWrapper>
		</>
	);
}

const StyledLoginText = styled.h2`
	font-size: 60px;
	text-align: center;
`;
