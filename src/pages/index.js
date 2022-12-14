import {useSession} from 'next-auth/react';
import Head from 'next/head';

import CategoryCard from '../components/CatergoryCard';
import Layout from '../components/Layout';
import {Login} from '../components/Login';
import StyledHeadline from '../components/StyledHeadline';
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
						<StyledHeadline>just pack</StyledHeadline>
						<CategoryCard />
					</StyledWrapper>
				</Layout>
			</>
		);
	} else return <Login />;
}
