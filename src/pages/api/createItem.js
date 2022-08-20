import Item from '../../models/itemModel';
import {dbConnect} from '../../src/dbConnect';

export default async function handler(request, response) {
	await dbConnect();

	if (request.method === 'POST') {
		const data = JSON.parse(request.body);

		await Item.create(data);

		response.status(200).json({
			message: 'item created',
		});
	}
}
