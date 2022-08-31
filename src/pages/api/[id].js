import {dbConnect} from '../../dbConnect';
import Item from '../../models/itemModel';

export default async function handler(request, response) {
	const {id} = request.query;

	await dbConnect();

	if (request.method === 'PUT') {
		const filter = {_id: id};
		const update = JSON.parse(request.body);
		await Item.findOneAndUpdate(filter, update);
		const items = await Item.find();
		response.status(200).json({message: 'item checked', items});
	}

	if (request.method === 'DELETE') {
		await Item.findByIdAndDelete(id);
		const items = await Item.find();
		response.status(200).json({message: 'item deleted', items});
	}
}
