import React, { useState, useEffect } from "react";
// import { API_POST } from "apis/community/space";
import SpaceForm from "./SpaceForm";
import SpaceCommunicate from "./SpaceCommunicate";

const SpaceFeed = () => {
    const [posts, setPosts] = useState([])

    /* Api Global */
    useEffect(() => {
        fetch('https://final-project-w5otwao4va-lz.a.run.app/posts')
            .then((res) => res.json())
            .then((json) => setPosts(json))
    }, [posts.length])

    return (
        <section className="container">
            <SpaceForm onPostSubmitted={(newPost) => {
                setPosts([newPost, posts]) // Updating the state.
                console.log('onPostSubmitted called')
            }} />
            {/* {posts.map((post) => (
                <SpaceCommunicate
                    key={post._id}
                    post={post} />
            ))} */}
        </section>
    )
};

export default SpaceFeed;