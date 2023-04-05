import React, { Component, useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import "./LikeButtonCss.css";

function clickLike(event) {
  event.preventDefault();
  document.getElementsByClassName("button")[0].style.backgroundColor =
    "Lightgreen";
}

const LikeButton = (props) => {};

export default LikeButton;
document.onclick();
