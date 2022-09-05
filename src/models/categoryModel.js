import mongoose from 'mongoose';
const {Schema} = mongoose;

const cardSchema = new Schema({
	category: {type: String, required: true},
	isBookmarked: {type: Boolean, default: false},
});

const Category = mongoose?.models?.Category || mongoose.model('Category', cardSchema);

export default Category;
