import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { API_POST } from "apis/space";

const SpaceForm = ({ onPostSubmitted }) => {
  const [newPost, setNewPost] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const message = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': accessToken
      },
      body: JSON.stringify({ text: newPost, title: 'title' })
    }

    console.log(`Message: ${JSON.stringify(message)}`)

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
            id="new-post"
            name="new-post"
            placeholder="Write here..."
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
          🚀 Post 🚀
          </span>
        </button>
        <p className="lenght-post">{newPost.length} / 140</p>
      </form>
    </section>
  )
};

export default SpaceForm;