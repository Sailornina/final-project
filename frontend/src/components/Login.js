import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileLink } from "../styles/GlobalStyle";
import user from "../reducers/user";
import Loading from "./Loading";
import styled from "styled-components";
import {
  Container,
  Main,
  BackgroundImage,
  Label,
  Input,
  Form,
  Button,
  Paragraph,
} from "../styles/GlobalStyle";
import Image from "../assets/backgroundLogin.jpg";
import ImageWelcome from "../assets/astronaut.png";
import { API_URL } from "../apis/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [mode, setMode] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (accessToken) {
      navigate("/profile");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (isUnavailable) {
      navigate("/not-found");
      setIsUnavailable(false);
    }
  }, [isUnavailable, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setUserId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
            localStorage.setItem("accessToken", data.response.accessToken);
            localStorage.setItem("userId", JSON.stringify(data.response.id));
            localStorage.setItem("username", data.response.username);
          });
        } else {
          console.log("Unsuccessful");
          batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
          });
          setIsUnavailable(true);
        }
      })
      .catch((error) => {
        console.log("Catch");
        setIsUnavailable(true);
      });
  };
  return (
    <>
      {loading === false ? (
        <Main>
          <Container>
            <BackgroundImage>
              <img src={Image} alt="backgroundImg" />{" "}
            </BackgroundImage>
            <Label htmlFor="login">Welcome Back!
            <Paragraph>
              To keep connected with us, please login with your personal
              information!
            </Paragraph>
						<Imagewelcome>
              <img src={ImageWelcome} alt="backgroundImg" />{" "}
            </Imagewelcome>
            <Input
              type="hidden"
              id="login"
							required= 'required'
              checked={mode === "login"}
              onChange={() => setMode("login")}
            />
						</Label>
            <Form onSubmit={onFormSubmit}>
              <Label htmlFor="username">
              <Input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
							</Label>
              <Label htmlFor="password">
              <Input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
							</Label>
              <Anchor>
                Forgot your password? Create a new   <ProfileLink to="/register">account!</ProfileLink>
              </Anchor>
              <Button
                type="submit"
                disabled={password.length < 8 || password.length > 20}
              >
                Sign in
              </Button>
              <Paragraph>
                New in the community?
                <ProfileLink to="/register">Register</ProfileLink>
              </Paragraph>
            </Form>
          </Container>
        </Main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Login;

export const Anchor = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 10px 0;
  @media (max-width: 667px) {
    line-height: 20px;
  }
`;


export const Imagewelcome = styled.div`
  text-align: center;
`;
