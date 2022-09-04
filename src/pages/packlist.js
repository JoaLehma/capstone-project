import {useSession} from 'next-auth/react';
import Head from 'next/head';

import Layout from '../components/Layout';
import {Login} from '../components/Login';
import StyledForm from '../components/StyledForm';
import StyledWrapper from '../components/StyledWrapper';

export default function HomePage() {
	const {data: session} = useSession();
	if (session) {
		return (
			<>
				<Layout>
					<Head>
						<title key="title">just pack</title>
						<meta key="description" name="description" content="This is my project" />
					</Head>
					<StyledWrapper>
						<h1>just pack</h1>
						<StyledForm />
					</StyledWrapper>
				</Layout>
			</>
		);
	} else return <Login />;
}
