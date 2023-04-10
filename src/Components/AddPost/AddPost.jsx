import React, { useState } from "react";
import "./AddPostCss.css";

const AddPost = (props) => {
  const [name, setName] = useState("");
  const [thoughts, setThoughts] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      poster: name,
      blurb: thoughts,
    };
    console.log(newPost);
    props.postAdd(newPost);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="col-auto">
          <label class="col-form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            class="form-control"
          />
        </div>
      </div>
      <div className="col-auto">
        <label class="col-form-thoughts">Thoughts</label>
      </div>
      <div class="col-auto">
        <input
          type="textarea"
          value={thoughts}
          onChange={(event) => setThoughts(event.target.value)}
          class="form-control"
        />
      </div>
      <div className="post">
        <button type="submit">Submit Post</button>
      </div>
    </form>
  );
};

export default AddPost;
