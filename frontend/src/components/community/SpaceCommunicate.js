import React, { useState } from 'react';
import { useSelector } from "react-redux";
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
        <section className="like-button-container">
            <div className="like-content">
                <p>{post.text}</p>
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
                    <button
                        className={post.likes > 0 ? 'button-heart clicked' : 'button-heart'}
                        onClick={() => handleLikeButton(post._id)}>
                        <span role="img" aria-label="heart">❤️</span>
                    </button>
                    <span className="like-counter"> x {counter}</span>
                    <p className="date">{moment(post.createdAt).fromNow()}</p>
                </div>
            </div>
        </section>

    )
};

export default SpaceCommunicate;