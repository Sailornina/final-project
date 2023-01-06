import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { API_POST } from "apis/community/space";
import SpaceForm from "./SpaceForm";
import SpaceCommunicate from "./SpaceCommunicate";
import user from "../../reducers/user";

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

    // console.log(`Posts: ${JSON.stringify(posts)}`)
    // console.log('userData', localStorage.getItem("userData"));
    // console.log('________________________________________________');
    // console.log('accessToken', localStorage.getItem("accessToken"));
    // console.log('user', localStorage.getItem("username"));

    return (
        <section className="container">
            <SpaceForm onPostSubmitted={(newPost) => {
                setPosts([newPost, ...posts])// Updating the state.
                console.log('onPostSubmitted called')
                
            }} />
            {posts.map((post) => (
                <SpaceCommunicate
                    key={post._id}
                    post={post} />
            ))}
        </section>
    )
};

export default SpaceFeed;


// import React, { useState, useEffect } from "react";
// // import { API_POST } from "apis/community/space";
// import SpaceForm from "./SpaceForm";
// import SpaceCommunicate from "./SpaceCommunicate";

// const SpaceFeed = () => {
//     const [posts, setPosts] = useState([]);

//     /* Api Global */
//     useEffect(() => {
//         fetch('https://final-project-w5otwao4va-lz.a.run.app/posts')
//             .then((res) => res.json())
//             .then((json) => setPosts(json.response.allPosts))
//     }, [posts.length])

//     console.log(`Posts: ${JSON.stringify(posts)}`)

//     return (
//         <section className="container">
//             <SpaceForm onPostSubmitted={(newPost) => {
//                 setPosts([newPost, ...posts]) // Updating the state.
//                 console.log('onPostSubmitted called')
                
//             }} />
//             {posts.map((post) => (
//                 <SpaceCommunicate
//                     key={post._id}
//                     post={post} />
//             ))}
//         </section>
//     )
// };

// export default SpaceFeed;