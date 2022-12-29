import express from "express";
import User from "../schemas/User";
import bcrypt from "bcrypt";

const router = express.Router()

router.post('/', async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const salt = bcrypt.genSaltSync();
		const newUser = await new User({
			username,
			email,
			password: bcrypt.hashSync(password, salt)
		}).save();
		res.status(201).json({
			response: {
				userId: newUser._id,
				username: newUser.username,
				accessToken: newUser.accessToken
			},
			success: true
		});
	} catch (error) {
		res.status(400).json({ response: error, success: false });
	}
});

export default router;