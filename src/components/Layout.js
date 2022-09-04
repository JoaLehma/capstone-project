import Navbar from './Navbar.js';

export default function Layout({children}) {
	return (
		<>
			<main>{children}</main>
			<Navbar />
		</>
	);
}
