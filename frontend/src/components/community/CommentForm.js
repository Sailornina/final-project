import React, { useState } from "react";
import { useSelector } from "react-redux";

const CommentForm = ({ onCommentSubmitted, postId }) => {
  const [newComment, setNewComment] = useState("");
  const accessToken = useSelector((store) => store.user.accessToken);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const comment = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify({ text: newComment }),
    };

    console.log(`Comment: ${JSON.stringify(comment)}`);

    fetch(`https://final-project-w5otwao4va-lz.a.run.app/posts/${postId}/comment`, comment)
      .then((res) => {res.json()
      .then((postCommented) => onCommentSubmitted(postCommented))
      .then(() => setNewComment(''))
  })
      
  };

  const handleOnNewComment = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="nested-comments">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new-comment">
          <textarea
            className="input-textarea comment"
            id="new-comment"
            name="new-comment"
            placeholder="add a comment"
            value={newComment}
            onChange={handleOnNewComment}
            rows="5"
            cols="23"
          />
        </label>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommentForm;
