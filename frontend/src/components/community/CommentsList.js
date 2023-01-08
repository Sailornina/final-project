import React from 'react';
import CommentForm from "./CommentForm"

const CommentsList = () => {

	return (
		<section>
		  <h1>Hi</h1>
		    <div>
				{comments.map((comment) => (
					<CommentForm
						key={comment._id}
						title={comment.title}
						comment={comment} />
				))}
			</div>
		</section>
	)
};

export default CommentsList;