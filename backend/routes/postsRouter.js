import express from "express";
import mongoose from "mongoose";
import Post from "../schemas/Post";
import Comment from "../schemas/Comment";
import isAuthenticated from "../middleware/isAuthenticated";

const router = express.Router()

router.get("/", async (req, res) => {
	try {
		const allPosts = await Post.find().populate('user', 'username')
			.populate({
				path: 'comments',
				populate: {
					path: 'author',
					model: 'User',
					select: '__id username'
				}
			})
			.sort({ createdAt: 'desc' })
			.limit(20)
			.exec();
		res.status(200).json({
			response: {
				allPosts,
				message: "All posts"
			},
			success: true
		});
	} catch (error) {
		res.status(400).json({ message: "Failed to load posts" })
	}
});

let parseSavedPost = (post) => {
	return {
		...post._doc,
		user: {
			id: post.user._id,
			username: post.user.username
		}
	}
}

router.post("/", isAuthenticated, async (req, res) => {
	const { title, text } = req.body;
	try {
		const user = res.locals.user
		const post = await Post({ user, title, text }).save()
		res.status(200).json({
			post: parseSavedPost(post),
			response: {
				message: "Your post was created"
			},
			success: true
		});
	} catch (error) {
		res.status(400).json({
			response: {
				message: "Could not publish your post."
			},
			success: false
		});
	}
});

router.post("/:id/comment", isAuthenticated, async (req, res) => {
	//If the user is registered in the database then they can create a post.
	// Find out which post you are commenting.
	const id = req.params.id
	const user = res.locals.user
	const session = await mongoose.connection.startSession()
	try {
		await session.withTransaction(async (session) => {
			const comment = new Comment({
				text: req.body.text,
				post: id,
				author: user
			})
			await comment.save({ session });

			let result = await Post.findByIdAndUpdate(id, { '$push': { 'comments': comment._id } }, { session });
			if (!result) {
				throw new Error(`Couldn't find Post with id: ${id}`);
			}
			console.log("Result: " + result);
			res.status(200).json(comment);
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: `Couldn't comment. Reason: [${error}]` })
	} finally {
		await session.endSession();
	}
});

router.patch("/:id/like", isAuthenticated, async (req, res) => {
	const id = req.params.id
	try {
		const likeToUpdate = await Post.findByIdAndUpdate({ _id: id },
			{
				$inc: {
					likes: 1
				}
			},
			{ new: true }
		);
		res.status(200).json(likeToUpdate)
	} catch (error) {
		res.status(400).json({ message: "Couldn't find comment by id" })
	}
});

router.delete("/:id", isAuthenticated, async (req, res) => {
	const id = req.params.id
	try {
		const deletedPost = await Post.findOneAndDelete({ _id: id });
		if (deletedPost) {
			res.status(200).json({ success: true, response: deletedPost });
		} else {
			res.status(404).json({ success: false, response: 'Post not found' });
		}
	} catch (error) {
		res.status(400).json({ success: false, response: error });
	}
});


export default router;