// import React from "react";
// import CommentCommunicate from "./CommentCommunicate";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
// import CommentsList from "./CommentsList"

const CommentForm = () => {
	const [newComment, setNewComment] = useState('');
	// const [comments, setComments] = useState([]);
	const accessToken = useSelector((store) => store.user.accessToken);

const handleOnNewComment = (e) => {
	setNewComment(e.target.value)
}
// const onCommentSubmitted = (newComment)  => {
// 	setNewComment([])
// }

const handleComment = (id) => {
	const ids = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		},
		body: { text: newComment }
	}

	// console.log(`Comment: ${JSON.stringify(comment)}`)

	fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${id}/comment`, ids)
		.then((res) => {
			if (res.status === 200) {
				res.json()
					.then((commentedPost) => {
						// onCommentSubmitted(commentedPost)
						console.log(`Request successful: ${JSON.stringify(commentedPost)}`)
					})
					.then(() => setNewComment(''))
				}
		})
};

return(
	<div className="nested-comments">
	{/* <CommentsList /> */}

	<textarea
          className="input-textarea comment"
          id="new-comment"
          name="new-comment"
          placeholder="add a comment"
          value={newComment}
          onChange={handleOnNewComment}
          rows="5"
          cols="23" />
					  <button type="submit" onClick={handleComment}>Post</button>
						</div>
)

};

export default CommentForm;