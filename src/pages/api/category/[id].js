import {dbConnect} from '../../../dbConnect';
import Category from '../../../models/categoryModel';

export default async function handler(request, response) {
	const {id} = request.query;

	await dbConnect();

	if (request.method === 'PUT') {
		const filter = {_id: id};
		const update = JSON.parse(request.body);
		await Category.findOneAndUpdate(filter, update);
		const categories = await Category.find();
		response.status(200).json({message: 'category checked', categories});
	}

	if (request.method === 'DELETE') {
		await Category.findByIdAndDelete(id);
		const categories = await Category.find();
		response.status(200).json({message: 'category deleted', categories});
	}
}
