import express from "express";
import cors from "cors";
import crypto from "crypto";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017,localhost:27018,localhost:27019/final-project?replicaSet=rs";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	accessToken: {
		type: String,
		default: () => crypto.randomBytes(128).toString("hex"),
	},
});

const User = mongoose.model("User", UserSchema);

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

const isAuthenticated = async (req, res, next) => {
	console.log(req);
	const accessToken = req.header("Authorization");
	try {
		const user = await User.findOne({ accessToken: accessToken });
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

app.get("/posts", async (req, res) => {
	try {
		const allPosts = await Post.find().sort({ createdAt: 'desc' }).limit(20).exec();
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

app.post('/register', async (req, res) => {
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

app.post("/posts/", isAuthenticated, async (req, res) => {
	const { title, text } = req.body;
	try {
		const posts = await Post({ title, text }).save()
		res.status(200).json({
			posts,
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

app.post("/posts/:id/comment", isAuthenticated, async (req, res) => { //If the user is registered in the database then they can create a post.
	// Find out which post you are commenting.
	const id = req.params.id
	const session = await mongoose.connection.startSession()
	try {
		await session.withTransaction(async (session) => {
			const comment = new Comment({
				text: req.body.text,
				post: id,
				author: req.body.userId
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

app.patch("/posts/:id/like", async (req, res) => {
	const id = req.params.id
	try {
		const likeToUpdate = await Post.findByIdAndUpdate(
			{ _id: id },
			{
				$inc: {
					like: 1
				}
			},
			{ new: true }
		);
		res.status(200).json(likeToUpdate)
	} catch (error) {
		res.status(400).json({ message: "Couldn't find comment by id" })
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});