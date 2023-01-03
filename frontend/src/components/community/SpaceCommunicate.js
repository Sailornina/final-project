import React, { useState } from 'react';
import moment from 'moment';

const SpaceCommunicate = ({post}) => {
    const [counter, setCounter] = useState(post.hearts);

    const handleLikeButton = (id) => {
        const ids = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        }

        fetch(`'https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/like'`, ids)
            .then((res) => {
                if (res.status === 200) {
                    res.json()
                        .then((likedPost) => {
                            console.log(`Request successful: ${JSON.stringify(likedPost)}`)
                            setCounter(likedPost.hearts)
                        })
                }
            })
    };

    return (
        <section className="like-button-container">
            <div className="like-content">
                <p key={post._id}>{post.message}</p>
                <div className="info-like">
                    <button
                        className={post.hearts > 0 ? 'button-heart clicked' : 'button-heart'}
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