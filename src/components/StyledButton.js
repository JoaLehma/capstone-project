import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	padding: 1px 10px 0 11px;
	border: 1px solid #d5d9d9;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
	color: #0f1111;
	font-family: 'Rajdhani', sans-serif;
	font-size: 13px;
	line-height: 29px;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	touch-action: manipulation;

	&:hover {
		background-color: #f7fafa;
	}

	&:focus {
		border-color: #008296;
		outline: 0;
		box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
	}

	${({variant}) =>
		variant === 'return' &&
		css`
			width: 50px;
		`}

	${({variant}) =>
		variant === 'login' &&
		css`
			width: 100px;
		`}

		${({variant}) =>
		variant === 'logout' &&
		css`
			width: 100px;
		`}

		${({variant}) =>
		variant === 'reset' &&
		css`
			width: 75px;
		`}
`;

export default StyledButton;
