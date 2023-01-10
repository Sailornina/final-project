import express from "express";
import Comment from "../schemas/Comment";
import isAuthenticated from "../middleware/isAuthenticated";

const router = express.Router()

router.patch("/:id/like", isAuthenticated, async (req, res) => {
	const id = req.params.id
	try {
		const likeToUpdateToComment = await Comment.findByIdAndUpdate({ _id: id },
			{
				$inc: {
					likes: 1
				}
			},
			{ new: true }
		);
		res.status(200).json(likeToUpdateToComment)
	} catch (error) {
		res.status(400).json({ message: "Couldn't find comment by id" })
	}
});

router.delete("/:id", isAuthenticated, async (req, res) => {
	const id = req.params.id
	try {
		const deletedComment = await Comment.findOneAndDelete({ _id: id });
		if (deletedComment) {
			res.status(200).json({ success: true, response: deletedComment });
		} else {
			res.status(404).json({ success: false, response: 'Comment not found' });
		}
	} catch (error) {
		res.status(400).json({ success: false, response: error });
	}
});

export default router;