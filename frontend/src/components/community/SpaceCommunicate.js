import React, { useState } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import moment from 'moment';
import { Link } from "react-router-dom";
import Icon from "../../assets/waste-icon.png";
import communityImg from "../../assets/Rocket.png";
// import user from '../../reducers/user';

const SpaceCommunicate = ({ post }) => {
	// const dispatch = useDispatch();
	  // const [removePost] = useState('');
    const [counter, setCounter] = useState(post.likes);		
    const accessToken = useSelector((store) => store.user.accessToken);

		const onDeletePost = async (id) => {
									const options = {
											method: "DELETE",
											headers: {
													"Content-Type": "application/json",
													'Authorization': accessToken
											},
											body: JSON.stringify({ 
											}),
									}
									await fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${id}`, options)
									// .then((res) => res.json())
									// .then((dispatch(user.actions.removePost(id))))
										
	}


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

    return (
		     <Main>
					<CommunityImage><img src={communityImg} alt="backgroundImg" /> </CommunityImage>
            <Container>
						    <ParagraphTitle>{post.title}</ParagraphTitle>
								<Paragraph>{post.text}</Paragraph>
								<CommentLink to="/comment-form">  Reply  </CommentLink>
                    <Button
                        className={post.likes > 0 ? 'button-heart clicked' : 'red-heartButton'}
                        onClick={() => handleLikeButton(post._id)}>
                        <span role="img" aria-label="heart">❤️</span>
                    </Button>
                    <Counter>x{counter}</Counter>
                    <Moment>{moment(post.createdAt).fromNow()}</Moment>
										<Button onClick={() => onDeletePost(post._id)}><RemoveButton
              src={Icon}  
                alt="remove" /></Button>
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
	@media (max-width: 667px) {
  display: flex;
	justify-content: center;
  }
`;

export const Container = styled.div`
  word-break: break-all;
	width: 700px; 
	height: 200px;
  border-radius: 10px;
  padding: 60px 30px;
  margin-top: 10px;
  box-shadow: -3px -3px 9px #aaa9a9a2,
              3px 3px 7px rgba(147, 149, 151, 0.671);
	@media (max-width: 667px) {
    width: 300px; 
	  height: 200px;
		padding: 10px 0px;
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
	margin-top: 30px;
	margin-right: 5px;
	float: left; 
	@media (max-width: 667px) {
	margin-top: -30px;
  }
/* 	
	&.button-heart clicked {
        fill:"red";
	} */
`;

export const Paragraph = styled.p`
  display: flex;
	color: rgb(84, 79, 76);
`;

export const CommentLink = styled(Link)`
text-decoration: none;
color: rgb(84, 79, 76);
font-size: 10px;
float: right;
font-weight: 700px;
cursor: pointer;
`;

export const ParagraphTitle = styled.p`
  display: flex;
	font-weight: bold;
	font-size: 30px;
	color: rgb(84, 79, 76);
`;

export const Counter = styled.p`
float: left;
margin-top: 40px;
font-size: 10px;
@media (max-width: 667px) {
  float: right;
	margin-top: 
	-35px;
  }
`;

export const Moment = styled.p`
	float: right;
	font-size: 10px;
	margin-top: 40px;
	@media (max-width: 667px) {
    width: 300px; 
	  height: 100px;
		padding: 10px 0px;
		margin-top: -15px;
  }
`;


const RemoveButton = styled.img`
    filter: invert(100%) sepia(18%) saturate(351%) hue-rotate(149deg) brightness(100%) contrast(95%);
    width: 15px;
    height: 15px;
  &:hover {
    animation: jelly .5s ease;
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
`
