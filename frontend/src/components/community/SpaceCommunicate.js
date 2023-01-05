import React, { useState } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import moment from 'moment';
// import user from '../../reducers/user';
import communityImg from "../../assets/Rocket.png";

const SpaceCommunicate = ({ post }) => {
	// const dispatch = useDispatch();
    const [counter, setCounter] = useState(post.likes);		
    // const [comment, setComment] = useState(post.comment);
		// const [deleted, setDeleted] = useState(false)
    const accessToken = useSelector((store) => store.user.accessToken);

//LocalStorage testing
		// const user = localStorage.getItem('user');
//or????
	// const post = localStorage.getItem('post');

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
    // };}

    return (
        <Main>
            <Container>
						<CommunityImage><img src={communityImg} alt="backgroundImg" /> </CommunityImage>
                <Paragraph>{post.text}</Paragraph>
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
                        className={post.likes > 0 ? 'button-heart clicked' : 'red-heartButton'}
                        onClick={() => handleLikeButton(post._id)}>
                        <span role="img" aria-label="heart">❤️</span>
                    </Button>
                    <Counter> x {counter}</Counter>
                    <Moment>{moment(post.createdAt).fromNow()}</Moment>
                    {/* <Button type="button" className="deleted-btn" onClick={() => dispatch(posts.id.removeItem(post.id))}> <RemoveButton
                src="./assets/waste-icon.png"
                alt="remove" />
              </Button> */}
					  </Container>
        </Main>

    )
};

export default SpaceCommunicate;


export const CommunityImage = styled.div`
  position: fixed;
  text-align: center;
	background-size: 100vw 100vh;
	z-index: -1;
`;

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
  border-radius: 50px;
	width: 30px;
	height: 30px;
  border: 1px solid #2b3a55;
  background-color: #2b3a55;
  cursor: pointer;
	border: 0;
	margin-right: 5px;
	float: left; 
	@media (max-width: 667px) {
  float: right;
  }
/* 	
	&.button-heart clicked {
        fill:"red";
	} */
`;

export const Paragraph = styled.p`
  display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(84, 79, 76);
`;

export const Counter = styled.p`
float: left;
font-size: smaller;
@media (max-width: 667px) {
  float: right;
  }
`;


export const Moment = styled.p`
	float: right;
	font-size: 10px;
	@media (max-width: 667px) {
    width: 300px; 
	  height: 100px;
		padding: 10px 0px;
  }
`;


// const RemoveButton = styled.img`
// width: 15px;
//     height: 15px;
//   &:hover {
//     animation: jelly .5s ease;
//   }
//   @keyframes jelly {
//   from {
//     transform: scale(1, 1);
//   }
//   30% {
//     transform: scale(1.25, 0.75);
//   }
//   40% {
//     transform: scale(0.75, 1.25);
//   }
//   to {
//     transform: scale(1, 1);
//   }
//   }
// `