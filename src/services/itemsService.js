import {dbConnect} from '../dbConnect';
import Item from '../models/itemModel';

export async function getAllItems() {
	await dbConnect();

	const items = await Item.find();

	return items.map(({id, item}) => {
		return {id, item};
	});
}

export async function getItemById(id_) {
	await dbConnect();

	const itemID = await Item.findById(id_);

	const {id, item} = itemID;

	return {id, item};
}
