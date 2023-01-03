import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import user from "../reducers/user";
import { Title, MainContainer, MainHeading, Button } from "../styles/GlobalStyle";
// import styled from "styled-components/macro";
// import { ProfileImage } from '../styles/GlobalStyle';
// import background from "../assets/background-image-profile.jpg";
import { API_URL } from "../apis/user";

const Profile = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const accessToken = useSelector((store) => store.user.accessToken);
	const username = useSelector((store) => store.user.username)

	const logout = () => {
		batch(() => {
			dispatch(user.actions.setUsername(null));
			dispatch(user.actions.setAccessToken(null));
			localStorage.removeItem("user");
		})
	};
	useEffect(() => {
		if (!accessToken) {
			navigate('/login')
		}
	}, [accessToken, navigate])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: accessToken,
			},
		}

		fetch(API_URL('editprofile'), options)
			.then((res) => res.json())
			.then((data) => {
				console.log("Response: " + data);
				if (data.success) {
					// setSecret(data.message)
				}
			})
	}, [accessToken])

	return (
		<MainContainer>
			<MainHeading>
					<Title>Welcome to your page {username}</Title>
					<Link to= "/space-feed">Your Community</Link>
					{/* <ProfileImage><img src={background} alt="backgroundImg" /> </ProfileImage> */}
					<Button className="profile-button-logout" onClick={logout}>
						Logout
					</Button>
			</MainHeading>
		</MainContainer>
	);
};

export default Profile;
