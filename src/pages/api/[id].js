import {dbConnect} from '../../dbConnect';
import Item from '../../models/itemModel';
import {getItemById} from '../../services/itemsService';

export default async function handler(request, response) {
	const {id} = request.query;

	await dbConnect();

	if (request.method === 'GET') {
		const item = getItemById(id);
		response.status(200).json(item);
	} else if (request.method === 'DELETE') {
		await Item.findByIdAndDelete(id);
		response.status(200).json({message: 'item deleted'});
	}
}
