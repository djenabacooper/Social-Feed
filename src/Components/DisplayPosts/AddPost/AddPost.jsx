import React, { useState } from "react";

const AddPost = (props) => {
  const [name, setName] = useState("");
  const [thoughts, setThoughts] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      thoughts: thoughts,
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Thoughts</label>
      <input
        type="text"
        value={thoughts}
        onChange={(event) => setThoughts(event.target.value)}
      />
      <button type="submit">Submit Post</button>
    </form>
  );
};

export default AddPost;
