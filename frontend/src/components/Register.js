import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileLink } from "../styles/GlobalStyle";
import user from "../reducers/user";
import Loading from './Loading';
import { 
	Container,
	Main,
	BackgroundImage, 
	Label, 
	Input, 
	Form, 
	Button, 
	Paragraph
 } from "../styles/GlobalStyle";
import Image from "../assets/background-image.jpg";
import Swal from 'sweetalert2'
import { API_URL } from "../apis/user";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true)
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [mode, setMode] = useState("register");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((store) => store.user.accessToken);


	useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  useEffect(() => {
    if (accessToken) {
      navigate("/profile");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (isUnavailable) {
      // navigate("/not-found");
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong! You already have an account in our community!'
			})
			// alert("Oops! You already have an account in our community!")
      setIsUnavailable(false);
    }
  }, [isUnavailable, alert]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    };

    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setUserId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
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
    <Container >
				<BackgroundImage><img src={Image} alt="backgroundImg" /> </BackgroundImage>
      <Label htmlFor="register">Hello Space Adventurer!</Label>
      <Paragraph>
        Enter your personal details and start your journey with us!
      </Paragraph>
      <Input
        type="hidden"
        id="register"
        checked={mode === "register"}
        onChange={() => setMode("register")}
      />
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
					placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
					placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
					placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Paragraph>
          Password must contain at least 8 characters, one letter and one
          number.
        </Paragraph>
        <Button
          type="submit"
          disabled={password.length < 8 || password.length > 20}
        >
          {" "}
          Submit{" "}
        </Button>
				<Paragraph>
          Already have an account? <ProfileLink to="/login">Login</ProfileLink>
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

export default Register;

