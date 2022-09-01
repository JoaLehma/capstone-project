import {MongoDBAdapter} from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import clientPromise from '../../../lib/mongodb';
export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	adapter: MongoDBAdapter(clientPromise),
	callbacks: {
		async session({session, user}) {
			return {...session, user: {...session.user, id: user.id}};
		},
	},
};
export default NextAuth(authOptions);
