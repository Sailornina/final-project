import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import imagesRouter from "./routes/imagesRouter";
import postsRouter from "./routes/postsRouter";
import registerRouter from "./routes/registerRouter";
import User from "./schemas/User";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017,localhost:27018,localhost:27019/final-project?replicaSet=rs";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/endpoints", (req, res) => {
	res.send(listEndpoints(app))
});

app.get("/", (req, res) => {
	const AllEndpointsForUser = {
		Welcome: 'Hi! You can see all endpoints (GET, POST, PATCH) for the user.',
		Routes: [{
			"/users": 'Get all users in the database. It is only for developers.',
			"/posts": 'Get all post with comments and likes',
			"/register": 'User can register using an username, email and password',
			"/login": 'User login using an username, email and password but also an unique authentication',
			"/posts/:id/{comment}": 'User can post a comment',
			"/posts/:id/like": 'User can patch your like to a comment.'
		}]
	}
	res.send(AllEndpointsForUser);
});

/*This endpoint is not to user side*/
app.get("/users", async (req, res) => {
	try {
		const users = await User.find().limit(20).exec();
		res.status(200).json(users)
	} catch (error) {
		res.status(400).json({ message: "Could not create user" })
	}
});


// app.post('/register', async (req, res) => {
// 	const { username, email, password } = req.body;
// 	try {
// 		const salt = bcrypt.genSaltSync();
// 		const newUser = await new User({
// 			username,
// 			email,
// 			password: bcrypt.hashSync(password, salt)
// 		}).save();
// 		res.status(201).json({
// 			response: {
// 				userId: newUser._id,
// 				username: newUser.username,
// 				accessToken: newUser.accessToken
// 			},
// 			success: true
// 		});
// 	} catch (error) {
// 		res.status(400).json({ response: error, success: false });
// 	}
// });

app.post('/login', async (req, res) => {
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

app.use("/images", imagesRouter);
app.use("/posts", postsRouter);
app.use("/register", registerRouter);


// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});