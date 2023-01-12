import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import Icon from "../../assets/waste-icon.png";
import communityImg from "../../assets/Rocket.png";
import Comments from "./Comments";

const SpaceCommunicate = ({ post, onPostDeleted }) => {
  const [counter, setCounter] = useState(post.likes);
  const accessToken = useSelector((store) => store.user.accessToken);

  const onDeleteButtonClicked = () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': accessToken,
      }
    };
    fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${post._id}`, options)
    .then((res) => {
      if(res.status === 200) {
        onPostDeleted(post)
      }
    })
  };

  const handleLikeButton = (id) => {
    const ids = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };

    fetch(
      `https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/like`,
      ids
    ).then((res) => {
      if (res.status === 200) {
        res.json().then((likedPost) => {
          console.log(`Request successful: ${JSON.stringify(likedPost)}`);
          setCounter(likedPost.likes);
        });
      }
    });
  };

  return (
    <Main>
      <CommunityImage>
        <img src={communityImg} alt="backgroundImg" />{" "}
      </CommunityImage>
      <Container>
        <ParagraphTitle>{post.title}</ParagraphTitle>
				<Title>{post.user.username}</Title>
        <SubContainer>
          <Paragraph>{post.text}</Paragraph>
        </SubContainer>
        <Counter>{counter}</Counter>
        <Button
          className={post.likes}
          onClick={() => handleLikeButton(post._id)}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Button>
        <Moment>{moment(post.createdAt).fromNow()}</Moment>
        <Button onClick={() => onDeleteButtonClicked(post._id)}>
          <RemoveButton src={Icon} alt="remove" />
        </Button>
      </Container>
      <Comments postId={post._id} commentList={post.comments} />
    </Main>
  );
};

export default SpaceCommunicate;

export const CommunityImage = styled.div`
  z-index: -1;
`;

export const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  text-align: center;
  background-size: cover;
  @media (max-width: 667px) {
    justify-content: center;
		overflow:hidden
  }
`;

export const Container = styled.div`
  word-break: break-all;
  width: 700px;
  height: 200px;
  border-radius: 10px;
  padding: 10px 30px;
  margin-top: 10px;
  box-shadow: 0 0 5px 5px olive;
  @media (max-width: 667px) {
    width: 320px;
    height: 200px;
    padding: 10px 0px;
  }
`;

export const SubContainer = styled.div`
  background-color: #8FBC8F;
  margin-top: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid;
  border: none;
  padding: 10px 30px;
  border-radius: 20px;
  @media (max-width: 667px) {
    border-radius: 40px;
  }
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 80px;
  cursor: pointer;
  border: 0;
  margin-right: 5px;
  float: left;
`;

export const Paragraph = styled.p`
  color: rgb(84, 79, 76);
  @media (max-width: 667px) {
    font-size: smaller;
  }
`;

export const ParagraphTitle = styled.p`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 30px;
  color: rgb(84, 79, 76);
`;


export const Title = styled.p`
  text-transform: capitalize;
  color: #008080;
	float: left;
	font-weight: bold;
  text-transform: capitalize;
  font-size: small;
	margin-top: -10px;
	margin-left: 20px;
`;

export const Counter = styled.p`
  float: left;
  margin-top: 0px;
  font-size: 10px;
`;

export const Moment = styled.p`
  float: right;
  font-size: 10px;
  margin-top: 5px;
  @media (max-width: 667px) {
    margin-left: auto;
  }
`;

const RemoveButton = styled.img`
  width: 12px;
  height: 12px;
	margin-top: 5px;
  &:hover {
    animation: jelly 0.5s ease;
  }
  @keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    to {
      transform: scale(1, 1);
    }
  }
  @media (max-width: 667px) {
    float: right;
    width: 10px;
    height: 10px;
  }
`;
