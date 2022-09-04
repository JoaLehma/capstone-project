import Link from 'next/link';
import styled from 'styled-components';

import SVG from './svgCollection';

export default function Navbar() {
	return (
		<>
			<NavbarWrapper>
				<NavList>
					<li>
						<Link href="/">
							<a>
								<SVG size="40px" color="black" fill="white" variant="home" />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/packlist">
							<a>
								<SVG size="40px" color="black" fill="white" variant="list" />
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
`;

const NavList = styled.ul`
	display: flex;
	border-top: 2px, solid, black;
	list-style: none;
`;
