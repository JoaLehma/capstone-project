import {useSession, signOut} from 'next-auth/react';
import Image from 'next/image';
import styled from 'styled-components';

export function LogoutButton() {
	const {data: session} = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<StyledLogoutButton onClick={() => signOut()}>Sign out</StyledLogoutButton>
			</>
		);
	}
}

export function Trashcan() {
	return (
		<StyledTrashcan>
			<Image src="/trash.svg" alt="An SVG of trash can" width="16px" height="16px" />
		</StyledTrashcan>
	);
}

const StyledLogoutButton = styled.button`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	width: 100px;
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
`;

const StyledTrashcan = styled.button`
	margin-top: 5px;
	transform: translate(0, -8%);
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;
