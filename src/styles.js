import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-family: 'Rajdhani', 'Cuprum', sans-serif;
		font-size: 1rem;
		font-weight: 400;

	}
`;
