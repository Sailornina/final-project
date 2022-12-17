import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import Navbar from "./components/Navbar";
import StartScreen from "./components/StartScreen";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Profile from "./components/Profile";
// import Loading from "./components/Loading";
import ImageandVideo from "./components/ImageandVideo";
import NotFound from "./components/NotFound";


export const App = () => {
	const reducer = combineReducers({
		user: user.reducer
	});
	const store = configureStore({
		// reducer: reducer
		reducer
	});
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<StartScreen />} />
					<Route
						path="/profile"
						element={<Profile />} />
					<Route
						path="/login"
						element={<Login />} />
					<Route
						path="/register"
						element={<Register />} />
					<Route
						path="/about"
						element={<About />} />
					{/* <Route 
            path="/Loading"
            element={<Loading />} /> */}
					<Route
						path="/not-found"
						element={<NotFound />} />
					<Route
						path="/imageandvideo"
						element={<ImageandVideo />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
};