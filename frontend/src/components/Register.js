import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "../reducers/user";
import styled from 'styled-components';
// import backgroundImage from "../assets/background-image1.jpg";
import { API_URL } from "../utils/utils";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUnavailable, setIsUnavailable] = useState(false)
	const [mode, setMode] = useState("register");
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
				}
			})
			.catch((error) => {
				console.log("Catch")
				setIsUnavailable(true)
			})
	}
	return (
		<RegisterContainer>
			{/* <BackgroundImage><img src={backgroundImage} alt="backgroundImg" /> </BackgroundImage> */}
			<Label htmlFor="register">Hello Space Adventurer!</Label>
			<Paragraph>
				Enter your personal details and start your journey with us!
			</Paragraph>
			<Input type="hidden" id="register" checked={mode === "register"} onChange={() => setMode("register")} />
			<Form onSubmit={onFormSubmit}>
				<Label htmlFor="username">Username</Label>
				<Input
					type="text"
					id="username"
					value={username}
					onChange={e => setUsername(e.target.value)} />
				<Label htmlFor="password">Email</Label>
				<Input
					type="email"
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)} />
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					id="password"
					value={password}
					onChange={e => setPassword(e.target.value)} />
				<Paragraph>Password must contain at least 8 characters, at least one letter and one number.</Paragraph>
				<Button type="submit" disabled={password.length < 8 || password.length > 20}> Submit </Button>
			</Form>
		</RegisterContainer>
	);
};

export default Register;

// export const BackgroundImage= styled.div`
//   /* width: 390px;
//   height: 526px;
//   left: -326px;
//   top: -80px; */
// 	filter: blur(8px);
// `;

export const RegisterContainer = styled.div`
/* width: auto; */
justify-content: center;
margin-top: 100px;
max-width: 100%;
min-height: 100vh;
/* @media (min-width: 1200px) {
	justify-content: center;
	width: auto;
  } */
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
line-height: 80px;
justify-content: center;
flex-direction: column;
padding: 0 100px;
height: 100%;
text-align: center;
@media (min-width: 1200px) {
  padding: 0 500px;
  }
`;

export const Label = styled.h1`
  display: flex;
	/* width: 50%; */
	font-size: 25px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Paragraph = styled.p`
	display: flex;
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	width: 50%;
	margin: 0 auto;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Button = styled.button`
	 border-radius: 20px;
	 border: 1px solid #2B3A55;
	 background-color: #2B3A55;
	 color: #ffffff;
	 font-size: 12px;
	 font-weight: bold;
	 padding: 12px 45px;
	 letter-spacing: 1px;
	 cursor: pointer;
	 margin-bottom: 30%;
`;

