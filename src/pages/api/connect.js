import {unstable_getServerSession} from 'next-auth/next';

import {dbConnect} from '../../dbConnect';
import Item from '../../models/itemModel';

import {authOptions} from './auth/[...nextauth]';

export default async function handler(request, response) {
	const session = await unstable_getServerSession(request, response, authOptions);

	if (!session) {
		response.status(403).json({error: 'no-session'});
	}

	await dbConnect();

	if (request.method === 'POST') {
		const data = JSON.parse(request.body);
		await Item.create(data);
		const items = await Item.find();
		response.status(200).json({
			message: 'item created',
			items,
		});
	}
	if (request.method === 'GET') {
		const items = await Item.find();

		response.status(200).json(items);
	}
}
