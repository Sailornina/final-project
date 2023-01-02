import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "../reducers/user";
import styled from 'styled-components';
import { 
	Container,
	BackgroundImage, 
	Label, 
	Input, 
	Form, 
	Button, 
	Paragraph
 } from "../styles/GlobalStyle";
import Image from "../assets/background-image.jpg";
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
		<Container>
			<BackgroundImage><img src={Image} alt="backgroundImg" /> </BackgroundImage>
			{/* <Label htmlFor="register">Not registered yet? Register here</Label>
			<Input type="radio" id="register" checked={mode === "register"} onChange={() => setMode("register")} /> */}
			<Label htmlFor="login">Welcome Back!</Label>
			<Paragraph>
				To keep connected with us, please login with your personal information!
			</Paragraph>
			<Input type="hidden" id="login" checked={mode === "login"} onChange={() => setMode("login")} />
			<Form onSubmit={onFormSubmit}>
				{/* <p className="error"> {error} </p> */}
				<Label htmlFor="username">Username</Label>
				<Input
					type="text"
					id="username"
					// required ="Required"
					value={username}
					onChange={e => setUsername(e.target.value)} />
				<Label htmlFor="password">Email</Label>
				<Input
					type="email"
					id="email"
					// required ="Required"
					value={email}
					onChange={e => setEmail(e.target.value)} />
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					id="password"
					// required ="Required"
					value={password}
					onChange={e => setPassword(e.target.value)} />
				<Anchor href="#">Forgot your password?</Anchor>
				{/* <Paragraph>Password must contain at least 8 characters, at least one letter and one number.</Paragraph> */}
				<Button type="submit" disabled={password.length < 8 || password.length > 20}> Sign in</Button>
			</Form>
		</Container>
		// <>
		// 	<div className="outer-wrapper">
		// 		<div className="inner-wrapper">
		// 			<label htmlFor="register">Not registered yet? Register here</label>
		// 			<input type="radio" id="register" checked={mode === "register"} onChange={() => setMode("register")} />
		// 			<label htmlFor="login">Already registered? Login here</label>
		// 			<input type="radio" id="login" checked={mode === "login"} onChange={() => setMode("login")} />
		// 			<form onSubmit={onFormSubmit}>
		// 				{/* <p className="error"> {error} </p> */}
		// 				<label htmlFor="username">Username</label>
		// 				<input
		// 					type="text"
		// 					id="username"
		// 					// required ="Required"
		// 					value={username}
		// 					onChange={e => setUsername(e.target.value)} />
		// 				<label htmlFor="password">Email</label>
		// 				<input
		// 					type="email"
		// 					id="email"
		// 					// required ="Required"
		// 					value={email}
		// 					onChange={e => setEmail(e.target.value)} />
		// 				<label htmlFor="password">Password</label>
		// 				<input
		// 					type="password"
		// 					id="password"
		// 					// required ="Required"
		// 					value={password}
		// 					onChange={e => setPassword(e.target.value)} />
		// 				<p>Password must contain at least 8 characters, at least one letter and one number.</p>
		// 				<button type="submit" disabled={password.length < 8 || password.length > 20}> submit </button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </>
	);
};

export default Login;


export const Anchor = styled.a`
 color: #fff;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;
