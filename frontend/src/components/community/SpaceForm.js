// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// // import { API_POST } from "apis/space";

// const SpaceForm = ({ onPostSubmitted }) => {
//   const [newPost, setNewPost] = useState('');

//   const accessToken = useSelector((store) => store.user.accessToken);

//   const handleFormSubmit = (e) => {
//     e.preventDefault()

//     const message = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', 
//         'Authorization': accessToken
//       },
//       body: JSON.stringify({ text: newPost, title: 'title' })
//     }

//     console.log(`Message: ${JSON.stringify(message)}`)

//     fetch('https://final-project-w5otwao4va-lz.a.run.app/posts', message)
//       .then((res) => {
//         res.json()
//           .then((createdPost) => onPostSubmitted(createdPost))
//           .then(() => setNewPost(''))
//       })
//   }

//   const handleOnNewPost = (e) => {
//     setNewPost(e.target.value)
//   }

//   return (
//     <section className="form-container">
//       <form className="form" onSubmit={handleFormSubmit}>
//         <h1>What is happening in the space?</h1>
//         <label htmlFor="new-post">
//           <textarea
//             className="input-textarea text"
//             id="new-post"
//             name="new-post"
//             placeholder="Write here..."
//             value={newPost}
//             onChange={handleOnNewPost}
//             rows="5"
//             cols="33" />
//         </label>
//         <button
//           type="submit"
//           className="submit-button"
//           disabled={newPost.length < 5 || newPost.length > 140}>
//           <span role="img" aria-label="heart">
//           🚀 Post 🚀
//           </span>
//         </button>
//         <p className="lenght-post">{newPost.length} / 140</p>
//       </form>
//     </section>
//   )
// };

// export default SpaceForm;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
// import { API_POST } from "apis/space";

const SpaceForm = ({ onPostSubmitted }) => {
  const [newPost, setNewPost] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const message = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': accessToken
      },
      body: JSON.stringify({ text: newPost, title: 'title' })
    }

    console.log(`Message: ${JSON.stringify(message)}`)

    fetch('https://final-project-w5otwao4va-lz.a.run.app/posts', message)
      .then((res) => {
        res.json()
          .then((createdPost) => onPostSubmitted(createdPost))
          .then(() => setNewPost(''))
      })
  }

  const handleOnNewPost = (e) => {
    setNewPost(e.target.value)
  }

  return (
    <Main>
		<Container>
      <Form  onSubmit={handleFormSubmit}>
        <Title>What is happening in the space?</Title>
        <Label htmlFor="new-post">Here
          <Input
            id="new-post"
            name="new-post"
            placeholder="Write your comment here..."
            defaultValue={newPost}
            onChange={handleOnNewPost}
            rows="5"
            cols="33" />
        </Label>
				<Paragraph>{newPost.length} / 140</Paragraph>
        <Button
          type="submit"
          disabled={newPost.length < 5 || newPost.length > 140}>
          <span role="img" aria-label="heart">
          🚀 Post 🚀
          </span>
        </Button>
      </Form>
			</Container>	
    </Main>
  )
};

export default SpaceForm;


export const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	width: 30%;
	margin-top: 20px;
	padding: 20px;
  /* display: grid;
  place-items: center;
  text-align: center;
  background-size: cover; */
`;

export const Container = styled.div`
  width: 500px; 
	height: 300px;
  border-radius: 10px;
  box-shadow: -3px -3px 9px #aaa9a9a2,
              3px 3px 7px rgba(147, 149, 151, 0.671);
	@media (max-width: 667px) {
    width: 300px; 
	  height: 400px;
		padding: 20px 0px;
		margin-top: 50px;
  }
`;

export const Title = styled.h1`
  display: flex;
	font-size: 30px;
  color: #191970;
	flex-direction: column;
	justify-content: center;
	margin-top: 100px;
	align-items: center;
`;

export const Form = styled.form`
  color: #fff;
  display: flex;
  z-index: 1;
  align-items: center;
  line-height: 50px;
  justify-content: center;
  flex-direction: column;
	height: 300px;
  width: 100%;
  display: flex;
  position: relative;
  text-align: center;
	@media (max-width: 667px) {
    width: 300px; 
	  height: 300px;
  }
`;

export const Label = styled.h1`
  /* display: flex;
  color: #fff;
  font-size: 20px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

export const Input = styled.input`
  background-color: #eee;
	
	margin-top: 10px;
	width: 90%;
	height: 60px;
	border: 3px solid maroon;
	

  border: none;
	padding: 12px 15px;
  border-radius: 10px;
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
  margin-bottom: 20%;
`;

export const Paragraph = styled.p`
  font-size: smaller;
	padding: 0px;
	color: black;
  /* display: flex;
  color: black;
  font-size: 14px;
  font-weight: 100;
  line-height: 10px;
  letter-spacing: 0.5px;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;