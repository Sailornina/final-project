// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = Promise;

// const port = process.env.PORT || 8080;
// const app = express();

// // Add middlewares to enable cors and json body parsing
// app.use(cors());
// app.use(express.json());

// // Start defining your routes here
// app.get("/", (req, res) => {
//   res.send("Hi Nasa API!");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });