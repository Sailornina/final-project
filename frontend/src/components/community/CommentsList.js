// import React from "react";
import React, { useState } from 'react';
import  CommentForm from "./CommentForm"
// import SpaceForm from "./SpaceForm";

const CommentsList = () => {
	const [comments, setComments] = useState([]);
	
  return (

		<section>
				<h1>Hi</h1>
		<CommentForm onCommentSubmitted={(newComment) => {
				setComments([newComment, ...comments])// Updating the state.
				console.log('onCommentSubmitted called')
		}} />
<div>
				{comments.map((comment) => (
						<CommentForm 
							key={comment._id}
							title ={comment.title} 
							comment={comment}	 
							/>
							))}
	
	</div>
		 </section>
	)
}

/* comments.map(comment => (
    <div key={comment.id}>
      <CommentForm {...comment} />
    </div>
  ))  */


export default CommentsList;