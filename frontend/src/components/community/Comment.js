import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import moment from 'moment';
import Icon from "../../assets/waste-icon.png";


const Comment = ({ text, comment }) => {
	const username = useSelector((store) => store.user.username)
  const accessToken = useSelector((store) => store.user.accessToken);

  console.log("Comment rendered: " + text);

  const onDeleteComment =  (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': accessToken,
      },
      // body: JSON.stringify({}),
    };
    fetch(
      `https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/comment`, options)
		    .then((res) => {
			if (res.status === 200) {
				res.json()
					.then((deletedComment) => {
						console.log(`Request successful: ${JSON.stringify(deletedComment)}`)
					})
				}
			})
					};

  return (
    <Main>
      <Container>
        <Title>{username}</Title>
        <Paragraph>{text}</Paragraph>
				{/* <Moment>{moment(comment.createdAt).fromNow()}</Moment> */}
        <Button onClick={() => onDeleteComment(comment._id)}>
          <RemoveButton src={Icon} alt="remove" />
        </Button>
      </Container>
    </Main>
  );
};

export default Comment;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  text-align: center;
  background-size: cover;
  @media (max-width: 667px) {
  }
`;

export const Container = styled.div`
  word-break: break-all;
	
  width: 600px;
  height: 100px;
  border-radius: 10px;
  padding: 60px 30px;
  margin-top: 10px;
  box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
  @media (max-width: 667px) {
		display: flex;
		flex-direction: column;
    width: 50%;
    height: 100px;
    padding: 10px 0px;
  }
`;

export const Title = styled.h1`
color: 	#008080;
text-transform: capitalize;
font-size: small;
margin-top: -50px;
float: left;
@media (max-width: 667px) {
	font-size: smaller;
	margin-top: -10px;
  margin-left: 5px;
  }
`;


export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(84, 79, 76);
	@media (max-width: 667px) {
    font-size: small;
  }
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 80px;
  cursor: pointer;
  border: 0;
  margin-right: 5px;
  float: left;
	@media (max-width: 667px) {
    margin-top: 20px;
		
  }

`;

// export const Moment = styled.p`
// 	float: right;
// 	font-size: 10px;
// 	margin-top: 5px;
// 	@media (max-width: 667px) {
// 		margin-left: auto;
//   }
// `;

const RemoveButton = styled.img`
  /* filter: invert(100%) sepia(18%) saturate(351%) hue-rotate(149deg) brightness(100%) contrast(95%); */
  width: 15px;
  height: 15px;
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
		width: 10px;
    height: 10px;
  }
`;
