import React from 'react';
import styled from 'styled-components';

const Comment = ({ text, comment}) => {

  console.log("Comment rendered: " + text);
  return (
    <Main>
      <Container>
			  {/* <Paragraph>{user.name}</Paragraph> */}
        <Paragraph>{text}</Paragraph>
      </Container>
    </Main>
  )
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
  box-shadow: -3px -3px 9px #aaa9a9a2,
              3px 3px 7px rgba(147, 149, 151, 0.671);
	@media (max-width: 667px) {
    width: 50%; 
	  height: 100px;
		padding: 10px 0px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: rgb(84, 79, 76);
`;

