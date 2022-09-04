import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import SVG from './svgCollection';

export default function Navbar() {
	const router = useRouter();
	return (
		<>
			<NavbarWrapper>
				<NavList>
					<li>
						<Link href="/">
							<a>
								<SVG
									variant="home"
									size="40px"
									color="black"
									fill={router.pathname === '/' ? 'black' : 'white'}
								/>
							</a>
						</Link>
					</li>
					<li>
						<Link href="/packlist">
							<a>
								<SVG
									variant="list"
									size="40px"
									color="black"
									fill={router.pathname === '/packlist' ? 'black' : 'white'}
								/>
							</a>
						</Link>
					</li>
				</NavList>
			</NavbarWrapper>
		</>
	);
}

const NavbarWrapper = styled.nav`
	display: flex;
	justify-content: center;
	margin-right: 40px;
`;

const NavList = styled.ul`
	display: flex;
	position: fixed;
	top: 590px;
	justify-content: center;
	width: 375px;
	height: 65px;
	background-color: white;
	list-style: none;
	gap: 20px;
`;
