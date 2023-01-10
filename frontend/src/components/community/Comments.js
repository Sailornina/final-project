import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CommentForm from "./CommentForm";
import user from "../../reducers/user";
import Comment from "./Comment";


const Comments = ({ postId, commentList }) => {
    const dispatch = useDispatch();
    const [comments, setComments] = useState(commentList || []);


    // useEffect(() => {
    //     fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${_id}/comment`)
    //         .then((res) => res.json())
    //         .then((json) => setComments(json.response.allPosts))
    // }, [comments.length])

    useEffect(() => {
        dispatch(user.actions.setUsername(localStorage.getItem('username')));
        dispatch(user.actions.setUserId(localStorage.getItem('userId')));
        dispatch(user.actions.setAccessToken(localStorage.getItem("accessToken")));
    })

    return (
        <section className="container">
            <CommentForm postId={postId} onCommentSubmitted={(newComment) => {
                setComments([newComment, ...comments])// Updating the state.
                console.log('onCommentSubmitted: ' + JSON.stringify(newComment))
            }} />
            {comments.map((comment) => (
                <Comment
                    key={comment._id}
                    text={comment.text}
                />
            ))}
        </section>
    )
};

export default Comments;