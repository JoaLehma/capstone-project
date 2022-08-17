import Head from 'next/head';

import StyledForm from '../components/StyledForm';
import StyledWrapper from '../components/StyledWrapper';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">just pack</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledWrapper>
				<h1>just pack</h1>
				<StyledForm />
			</StyledWrapper>
		</>
	);
}
