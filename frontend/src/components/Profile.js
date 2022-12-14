import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { /*Link,*/ useNavigate } from "react-router-dom";
import user from "../reducers/user";
// import styled from "styled-components/macro";
import { API_URL } from "../utils/utils";

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

		fetch(API_URL('secrets'), options)
			.then((res) => res.json())
			.then((data) => {
				console.log("Response: " + data);
				if (data.success) {
					// setSecret(data.message)
				}
			})
	}, [accessToken])

	return (
		<section className="outer-wrapper">
			<section className="inner-wrapper">
				<div className="profile-page">
					<h1 className="profile-title">Welcome to your page {username}</h1>
					<div className="profile-container">
						{/* <p className="secret-text">{secret}</p> */}
					</div>
					{/* <Link to="/login" className="btn-back">
						Go back
					</Link> */}
					<button className="profile-button-logout" onClick={logout}>
						Logout
					</button>
				</div>
			</section>
		</section>
	);
};

export default Profile;
