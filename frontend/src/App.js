import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import GlobalStyle from "./styles/GlobalStyle.js";
import Navbar from "./components/Navbar";
import StartScreen from "./components/StartScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Profile from "./components/Profile";
import SpaceFeed from "./components/community/SpaceFeed";
import Comments from "./components/community/Comments";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import SearchForm from "./components/nasaSearch/SearchForm";

export const App = () => {
	const reducer = combineReducers({
		user: user.reducer
	});
	const store = configureStore({
		reducer
	});
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<StartScreen />} />
					<Route
						path="/profile"
						element={<Profile />} />
					<Route
						path="/space-feed"
						element={<SpaceFeed />} />
					<Route
						path="/comments"
						element={<Comments />} />
					<Route
						path="/search-form"
						element={<SearchForm />} />
					<Route
						path="/login"
						element={<Login />} />
					<Route
						path="/register"
						element={<Register />} />
					<Route
						path="/about"
						element={<About />} />
					<Route
						path="/loading"
						element={<Loading />} />
					<Route
						path="/not-found"
						element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};