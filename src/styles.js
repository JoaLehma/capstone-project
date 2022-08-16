import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/rajdhani-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/rajdhani-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/rajdhani-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/rajdhani-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/rajdhani-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/rajdhani-v15-latin-regular.svg#Rajdhani') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/rajdhani-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/rajdhani-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/rajdhani-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/rajdhani-v15-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/rajdhani-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/rajdhani-v15-latin-700.svg#Rajdhani') format('svg'); /* Legacy iOS */
}


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
		font-family: 'Rajdhani', sans-serif;
		font-size: 1rem;
		font-weight: 400;

	}
`;
