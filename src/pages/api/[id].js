import {dbConnect} from '../../dbConnect';
import Item from '../../models/itemModel';

export default async function handler(request, response) {
	const {id} = request.query;

	await dbConnect();

	if (request.method === 'DELETE') {
		await Item.findByIdAndDelete(id);
		const items = await Item.find();
		response.status(200).json({message: 'item deleted', items});
	}
}
