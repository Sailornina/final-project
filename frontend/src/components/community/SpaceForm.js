import React, { useState } from "react";
// import { API_POST } from "apis/space";

const SpaceForm = ({ onPostSubmitted }) => {
  const [newPost, setNewPost] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const message = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newPost })
    }

    fetch('https://final-project-w5otwao4va-lz.a.run.app/posts', message)
      .then((res) => {
        res.json()
          .then((createdPost) => onPostSubmitted(createdPost))
          .then(() => setNewPost(''))
      })
  }

  const handleOnNewPost = (e) => {
    setNewPost(e.target.value)
  }

  return (
    <section className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>What is happening in the space?</h1>
        <label htmlFor="new-post">
          <textarea
            className="input-textarea text"
            id="new-thought"
            name="new-post"
            placeholder="Write in the space! ^^"
            value={newPost}
            onChange={handleOnNewPost}
            rows="5"
            cols="33" />
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={newPost.length < 5 || newPost.length > 140}>
          <span role="img" aria-label="heart">
            ❤️ Send Happy Thought ❤️
          </span>
        </button>
        <p className="lenght-post">{newPost.length} / 140</p>
      </form>
    </section>
  )
};

export default SpaceForm;