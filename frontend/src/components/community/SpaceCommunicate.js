// import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import moment from 'moment';

// const SpaceCommunicate = ({ post }) => {
//     const [counter, setCounter] = useState(post.likes);
//     // const [comment, setComment] = useState(post.comment);

//     const accessToken = useSelector((store) => store.user.accessToken);

//     const handleLikeButton = (id) => {
//         const ids = {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': accessToken
//             }
//         }

//         fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/like`, ids)
//             .then((res) => {
//                 if (res.status === 200) {
//                     res.json()
//                         .then((likedPost) => {
//                             console.log(`Request successful: ${JSON.stringify(likedPost)}`)
//                             setCounter(likedPost.likes)
//                         })
//                 }
//             })
//     };

//     // const handleComment = (id) => {
//     //     const ids = {
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         body: JSON.stringify({ comments: comment })
//     //     }

//     //     fetch(`'https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/comment'`, ids)
//     //         .then((res) => {
//     //             if (res.status === 200) {
//     //                 res.json()
//     //                     .then((commentedPost) => {
//     //                         console.log(`Request successful: ${JSON.stringify(commentedPost)}`)
//     //                         setComment(commentedPost.comment)
//     //                     })
//     //             }
//     //         })
//     // };

//     return (
//         <section className="like-button-container">
//             <div className="like-content">
//                 <p>{post.text}</p>
//                 <div className="info-posted">
//                     {/* <textarea
//                         className="input-textarea comment"
//                         id="new-comment"
//                         name="new-comment"
//                         placeholder="add a comment"
//                         value={comment}
//                         onChange={handleComment}
//                         rows="5"
//                         cols="23" /> */}
//                     <button
//                         className={post.likes > 0 ? 'button-heart clicked' : 'button-heart'}
//                         onClick={() => handleLikeButton(post._id)}>
//                         <span role="img" aria-label="heart">❤️</span>
//                     </button>
//                     <span className="like-counter"> x {counter}</span>
//                     <p className="date">{moment(post.createdAt).fromNow()}</p>
//                 </div>
//             </div>
//         </section>

//     )
// };

// export default SpaceCommunicate;

import React, { useState } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import moment from 'moment';

const SpaceCommunicate = ({ post }) => {
    const [counter, setCounter] = useState(post.likes);
    // const [comment, setComment] = useState(post.comment);

    const accessToken = useSelector((store) => store.user.accessToken);

    const handleLikeButton = (id) => {
        const ids = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        }

        fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/like`, ids)
            .then((res) => {
                if (res.status === 200) {
                    res.json()
                        .then((likedPost) => {
                            console.log(`Request successful: ${JSON.stringify(likedPost)}`)
                            setCounter(likedPost.likes)
                        })
                }
            })
    };

    // const handleComment = (id) => {
    //     const ids = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ comments: comment })
    //     }

    //     fetch(`'https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/comment'`, ids)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 res.json()
    //                     .then((commentedPost) => {
    //                         console.log(`Request successful: ${JSON.stringify(commentedPost)}`)
    //                         setComment(commentedPost.comment)
    //                     })
    //             }
    //         })
    // };

    return (
        <Main>
            <Container>
                <Paragraph>{post.text}</Paragraph>
                <div className="info-posted">
                    {/* <textarea
                        className="input-textarea comment"
                        id="new-comment"
                        name="new-comment"
                        placeholder="add a comment"
                        value={comment}
                        onChange={handleComment}
                        rows="5"
                        cols="23" /> */}
                    <Button
                        className={post.likes > 0 ? 'button-heart clicked' : 'button-heart'}
                        onClick={() => handleLikeButton(post._id)}>
                        <span role="img" aria-label="heart">❤️</span>
                    </Button>
                    <span className="like-counter"> x {counter}</span>
                    <Moment className="date">{moment(post.createdAt).fromNow()}</Moment>
                </div>
            </Container>
        </Main>

    )
};

export default SpaceCommunicate;

export const Main = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 400px; 
	height: 100px;
  border-radius: 10px;
  padding: 40px 30px;
  margin-top: 10px;
  box-shadow: -3px -3px 9px #aaa9a9a2,
              3px 3px 7px rgba(147, 149, 151, 0.671);
	@media (max-width: 667px) {
    width: 300px; 
	  height: 100px;
		padding: 10px 0px;
		justify-content: center;
    flex-direction: column;
  }
`;


export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #2b3a55;
  background-color: #2b3a55;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-bottom: 10%;
`;

export const Paragraph = styled.p`
display: flex;
	align-items: center;
	color: rgb(84, 79, 76);
`;


export const Moment = styled.p`
	margin-left: auto;
`;