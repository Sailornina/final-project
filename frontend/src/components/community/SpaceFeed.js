import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { API_POST } from "apis/community/space";
import SpaceForm from "./SpaceForm";
import user from "../../reducers/user";
import SpaceCommunicate from "./SpaceCommunicate";


const SpaceFeed = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    /* Api Global */
    useEffect(() => {
        fetch('https://final-project-w5otwao4va-lz.a.run.app/posts')
            .then((res) => res.json())
            .then((json) => setPosts(json.response.allPosts))
    }, [posts.length])

    useEffect(() => {
        dispatch(user.actions.setUsername(localStorage.getItem('username')));
        dispatch(user.actions.setUserId(localStorage.getItem('userId')));
        dispatch(user.actions.setAccessToken(localStorage.getItem("accessToken")));
    })

    return (
        <section className="container">
            <SpaceForm onPostSubmitted={(newPost) => {
                setPosts([newPost, ...posts])// Updating the state.
                console.log('onPostSubmitted called')
            }} />
						
            {posts.map((post) => (
								<SpaceCommunicate 
                    key={post._id}
										title ={post.title} 
                    post={post}
								     />
										 ))}
        </section>
    )
};

export default SpaceFeed;

