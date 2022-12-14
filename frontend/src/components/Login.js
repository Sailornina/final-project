import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "../reducers/user";
import { API_URL } from "../utils/utils";

const Login = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [error, setError] = useState(null);
	const [isUnavailable, setIsUnavailable] = useState(false)
	const [mode, setMode] = useState("login");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const accessToken = useSelector((store) => store.user.accessToken);

	useEffect(() => {
		if (accessToken) {
			navigate("/profile");
		}
	}, [accessToken, navigate])

	useEffect(() => {
		if (isUnavailable) {
			navigate('/not-found')
			setIsUnavailable(false)
		}
	}, [isUnavailable, navigate])

	const onFormSubmit = (event) => {
		event.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username: username, email: email, password: password })
		}

		fetch(API_URL(mode), options)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					batch(() => {
						dispatch(user.actions.setUsername(data.response.username));
						dispatch(user.actions.setEmail(data.response.email));
						dispatch(user.actions.setUserId(data.response.id))
						dispatch(user.actions.setAccessToken(data.response.accessToken));
						dispatch(user.actions.setError(null));
					});
				} else {
					console.log("Unsuccessful")
					batch(() => {
						dispatch(user.actions.setUsername(null));
						dispatch(user.actions.setUserId(null))
						dispatch(user.actions.setAccessToken(null));
						dispatch(user.actions.setError(data.response));
					});
					setIsUnavailable(true)
					// setError('Invalid login. Try Again!');
				}
			})
			.catch((error) => {
				console.log("Catch")
				setIsUnavailable(true)
			})
	}
	return (
		<>
			<div className="main">
				<label htmlFor="register">Not registered yet? Register here</label>
				<input type="radio" id="register" checked={mode === "register"} onChange={() => setMode("register")} />
				<label htmlFor="login">Already registered? Login here</label>
				<input type="radio" id="login" checked={mode === "login"} onChange={() => setMode("login")} />
				<form onSubmit={onFormSubmit}>
					{/* <p className="error"> {error} </p> */}
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						// required ="Required"
						value={username}
						onChange={e => setUsername(e.target.value)} />
					<label htmlFor="password">Email</label>
					<input
						type="email"
						id="email"
						// required ="Required"
						value={email}
						onChange={e => setEmail(e.target.value)} />
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						// required ="Required"
						value={password}
						onChange={e => setPassword(e.target.value)} />
						<p>Password must contain at least 8 characters, at least one letter, one number and one special character</p>
					<button type="submit" disabled={password.length < 8 || password.length > 20}>Submit</button>
				</form>
			</div>
		</>
	);
};

export default Login;