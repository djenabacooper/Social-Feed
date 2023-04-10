import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import AddPost from "./Components/AddPost/AddPost";
/*import LikeButton from "./Components/LikeButton/LikeDislikeButton";*/
import "./App.css";

function App() {
  const [posts, setPosts] = useState([{ poster: "", blurb: "" }]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container">
      <div className="col-md-6">
        <div className="row">
          <AddPost postAdd={addNewPost} />
        </div>
        <div>SocialFeed</div>
        <div className="body">
          <div className="table">
            <div className="col-md-6">
              <div className="row">
                <div className="col-mid-6">
                  <div className="border-box">
                    <DisplayPosts postEntries={posts} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
