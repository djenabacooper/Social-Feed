import React, { Component, useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import "./LikeButtonCss.css";

const LikeButton = (props) => {
  const [likeClass, setlikeClass] = useState("inactive");
  const [dislikeClass, setdislikeClass] = useState("null");

  function clickLike(event) {
    event.preventDefault();
    if (likeClass === "inactive") {
      setlikeClass("active");
    } else {
      setlikeClass("inactive");
    }
  }
  return (
    <div>
      <button className={likeClass} onClick={clickLike}>
        like
      </button>
      <button className={dislikeClass} onClick={clickDislike}>
        hate
      </button>
    </div>
  );
  function clickDislike(event) {
    event.preventDefault();
    if (dislikeClass === "null") {
      setdislikeClass("hate");
    } else {
      setdislikeClass("null");
    }
  }
};

export default LikeButton;
