import mongoose from 'mongoose';
const {Schema} = mongoose;

const cardSchema = new Schema({
	item: {type: String, required: true},
	isChecked: {type: Boolean, default: false},
});

const Item = mongoose?.models?.Item || mongoose.model('Item', cardSchema);

export default Item;
