import express from "express";
import User from "../schemas/User";
import bcrypt from "bcrypt";

const router = express.Router()

router.post('/', async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const user = await User.findOne({ username, email });
		if (user && bcrypt.compareSync(password, user.password, email, user.email)) {
			res.status(200).json({
				response: {
					userId: user._id,
					username: user.username,
					email: user.email,
					accessToken: user.accessToken
				},
				success: true
			});
		} else {
			res.status(404).json({
				response: "Username, email or password doesn't match.",
				success: false
			});
		}
	} catch (error) {
		res.status(400).json({ response: error, success: false });
	}
});

export default router;