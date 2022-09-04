import mongoose from 'mongoose';
import './categoryModel';

const {Schema} = mongoose;

const cardSchema = new Schema({
	item: {type: String, required: true},
	isChecked: {type: Boolean, default: false},
	category: {type: Schema.Types.ObjectId, ref: 'Category'},
});

const Item = mongoose?.models?.Item || mongoose.model('Item', cardSchema);

export default Item;
