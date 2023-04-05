/* eslint-disable no-lone-blocks */
import React, { Component, useState } from "react";
import LikeButton from "../../Components/LikeButton/LikeDislikeButton";
/*import clickLike from "../../Components/LikeButton/LikeDislikeButton";*/

function clickLike() {
  document.getElementsByClassName("button")[0].style.backgroundColor =
    "Lightgreen";
}
const DisplayPosts = (props) => {
  return (
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {props.postEntries.map((post, index) => {
          return (
            <tr key={index}>
              <div className="col-md-6">
                <th>{post.poster}</th>
              </div>
              <div className="col-4">
                <td>{post.blurb}</td>
              </div>
              <div>
                <form onClick={clickLike}>
                  <button type="button">like</button>
                </form>
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPosts;
