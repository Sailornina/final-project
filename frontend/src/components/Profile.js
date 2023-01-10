import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import user from "../reducers/user";
import styled from "styled-components";
import { MainContainer, MainHeading, Button } from "../styles/GlobalStyle";
import Loading from "./Loading";
import background from "../assets/background-image-profile.jpg";
// import { API_URL } from "../apis/user";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

		useEffect(() => {
		dispatch(user.actions.setUsername(localStorage.getItem('username')));
		dispatch(user.actions.setUserId(localStorage.getItem('userId')));
		dispatch(user.actions.setAccessToken(localStorage.getItem("accessToken")));
})

  const logout = () => {
    batch(() => {
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setAccessToken(null));
    });
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return (
    <>
      {loading === false ? (
        <MainContainer>
          <MainHeading>
            <Heading> " THE DREAM IS ALIVE " </Heading>
            <Heading> Welcome to your profile {username} </Heading>
            <ProfileImage>
              <img src={background} alt="Img" />
            </ProfileImage>
            <SubHeading>
              Click <CommunityLink to="/space-feed">Here</CommunityLink> to Find
              your Favorite Community
            </SubHeading>
            <SubHeading>
              Start navigate to our
              <CommunityLink to="/search-form"> Search </CommunityLink> Menue
            </SubHeading>
            <Button className="profile-button-logout" onClick={logout}>
              Logout
            </Button>
          </MainHeading>
        </MainContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Profile;

export const ProfileImage = styled.div`
  position: fixed;
  text-align: center;
  z-index: -1;
  width: 390px;
  height: 526px;
  left: -326px;
  top: -80px;

`;

export const Heading = styled.h1`
  display: flex;
  text-transform: capitalize;
  margin: 0 auto;
  font-size: 30px;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const SubHeading = styled.h1`
  padding: 30px;
  border: solid 1px rgba(0, 0, 0, 0.08);
  font-size: 20px;
  color: #7fffd4;
  font-weight: 800px;
  padding: 60px;
  &:hover {
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 10);
  }
`;

export const CommunityLink = styled(Link)`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;
