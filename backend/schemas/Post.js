import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},
	text: {
		type: String,
		trim: true,
		required: true
	},
	// A post can have multiple comments, so it should be in a array.
	// All comments info should be kept in this array of this blog post.
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	likes: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: () => new Date()
	},
});

const Post = mongoose.model("Post", PostSchema);

export default Post;