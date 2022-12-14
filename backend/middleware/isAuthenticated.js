import User from "../schemas/User"

const isAuthenticated = async (req, res, next) => {
	const accessToken = req.header("Authorization");
	try {
		const user = await User.findOne({ accessToken: accessToken });
		res.locals.user = user;
		if (user) {
			next();
		} else {
			res.status(401).json({
				response: "Please log in",
				success: false
			});
		}
	} catch (error) {
		res.status(400).json({
			response: error,
			success: false
		});
	}
};

export default isAuthenticated;