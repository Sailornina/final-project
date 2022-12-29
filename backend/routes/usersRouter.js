import express from "express";
import User from "../schemas/User";

const router = express.Router()

/*This endpoint is not to user side*/
router.get("/", async (req, res) => {
	try {
		const users = await User.find().limit(20).exec();
		res.status(200).json(users)
	} catch (error) {
		res.status(400).json({ message: "Could not create user" })
	}
});

export default router;