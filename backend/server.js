import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import imagesRouter from "./routes/imagesRouter";
import postsRouter from "./routes/postsRouter";
import registerRouter from "./routes/registerRouter";
import loginRouter from "./routes/loginRouter";
import usersRouter from "./routes/usersRouter";
import commentsRouter from "./routes/commentsRouter";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017,localhost:27018,localhost:27019/final-project?replicaSet=rs";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

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
			"/posts/:id/like": 'User can patch your like to a comment.',
			"images/search": "User can search an image with description about astronomy",
			"/images/nasa-details/:id": "User can see an image with description about astronomy using an id"
		}]
	}
	res.send(AllEndpointsForUser);
});

app.use("/images", imagesRouter);
app.use("/posts", postsRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});