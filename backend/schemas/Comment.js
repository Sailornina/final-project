import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User",
		required: true
	},
	text: {
		type: String,
		trim: true,
		required: true
	},
	createdAt: {
		type: Date,
		default: () => new Date()
	},
	// Each comment can only relates to one blog, so it's not in array.
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;