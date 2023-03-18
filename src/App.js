import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([{ poster: "me", blurb: "nonsense" }]);
  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr>
                  <td>{post.poster}</td>
                  <td>{post.blurb}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
