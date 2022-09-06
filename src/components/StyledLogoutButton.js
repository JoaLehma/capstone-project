import {useSession, signOut} from 'next-auth/react';

import StyledButton from './StyledButton';

export function LogoutButton() {
	const {data: session} = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<StyledButton variant="logout" onClick={() => signOut()}>
					Sign out
				</StyledButton>
			</>
		);
	}
}
