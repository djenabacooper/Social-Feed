import React, { Component, useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import "./LikeButtonCss.css";

const LikeButton = (props) => {
  const [buttonClass, setbuttonClass] = useState("inactive");

  function clickLike(event) {
    event.preventDefault();
    if (buttonClass === "inactive") {
      setbuttonClass("active");
    } else {
      setbuttonClass("inactive");
    }
  }
  return (
    <div>
      <button className={buttonClass} onClick={clickLike}>
        like
      </button>
    </div>
  );
};

export default LikeButton;
