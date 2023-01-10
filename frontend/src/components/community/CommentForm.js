import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const CommentForm = ({ onCommentSubmitted, postId }) => {
  const [newComment, setNewComment] = useState("");
  const accessToken = useSelector((store) => store.user.accessToken);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const comment = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify({ text: newComment }),
    };

    console.log(`Comment: ${JSON.stringify(comment)}`);

    fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${postId}/comment`, comment)
      .then((res) => {res.json()
      .then((postCommented) => onCommentSubmitted(postCommented))
      .then(() => setNewComment(''))
  })
      
  };

  const handleOnNewComment = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <Main>
			<Container>
      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor="new-comment">
          <Input
            className="input-textarea comment"
            id="new-comment"
            name="new-comment"
            placeholder="Add a comment"
            value={newComment}
            onChange={handleOnNewComment}
            rows="5"
            cols="23"
          />
        </Label>
        <Button type="submit">Reply</Button>
      </Form>
			</Container>
    </Main>
  );
};

export default CommentForm;


export const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	width: 30%;
	margin-top: 10px;
	padding: 20px;
`;

export const Container = styled.div`
  width: 500px; 
	height: 200px;
`;


export const Form = styled.form`
  color: #fff;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
	height: 100%;
  position: relative;
  text-align: center;
`;

export const Label = styled.h1`
  display: flex;
  color: #fff;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #eee;
	margin-top: 10px;
	width: 150%;
	height: 80px;
	border: 3px solid;
  border: none;
	padding: 12px 15px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;



export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #2b3a55;
  background-color: #2b3a55;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 30px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 5%;
`;

export const Paragraph = styled.p`
  font-size: smaller;
	padding: 0px;
	color: black;
	font-weight: 800;
`;
