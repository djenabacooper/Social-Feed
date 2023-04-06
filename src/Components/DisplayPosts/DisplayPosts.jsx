/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-lone-blocks */
import React, { Component, useState } from "react";
import LikeDislikeButton from "../../Components/LikeButton/LikeDislikeButton";
/*import LikeDislikeButton from "./LikeButton/Components";*/
/*import clickLike from "../../Components/LikeButton/LikeDislikeButton";*/

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
                <LikeDislikeButton></LikeDislikeButton>
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPosts;
