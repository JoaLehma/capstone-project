import {unstable_getServerSession} from 'next-auth/next';

import {dbConnect} from '../../dbConnect';
import Category from '../../models/categoryModel';

import {authOptions} from './auth/[...nextauth]';

export default async function handler(request, response) {
	await dbConnect();
	const session = await unstable_getServerSession(request, response, authOptions);

	if (session) {
		if (request.method === 'POST') {
			const data = JSON.parse(request.body);
			await Category.create(data);
			const categories = await Category.find();
			response.status(200).json({
				message: 'category created',
				categories,
			});
		}
		if (request.method === 'GET') {
			const categories = await Category.find();

			response.status(200).json(categories);
		}
	} else {
		response.send({
			error: 'You must be sign in to view the protected content on this page.',
		});
		response.status(403).json({error: 'no-session'});
	}
}
