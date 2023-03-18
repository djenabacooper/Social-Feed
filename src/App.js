import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import AddPost from "./Components/DisplayPosts/AddPost/AddPost";

function App() {
  const [posts, setPosts] = useState([{ poster: "me", blurb: "nonsense" }]);
  return (
    <div>
      <DisplayPosts postEntries={posts} />
      <AddPost />
    </div>
  );
}

export default App;
