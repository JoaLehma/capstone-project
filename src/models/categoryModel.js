import mongoose from 'mongoose';
const {Schema} = mongoose;

const cardSchema = new Schema({
	name: {type: String, required: true},
	isBookmarked: {type: Boolean, default: false},
});

const Catergory = mongoose?.models?.Category || mongoose.model('Category', cardSchema);

export default Catergory;
