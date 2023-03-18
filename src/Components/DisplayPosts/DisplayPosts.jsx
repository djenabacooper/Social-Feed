const DisplayPosts = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {props.postEntries.map((post) => {
          return (
            <tr>
              <td>{post.poster}</td>
              <td>{post.blurb}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPosts;
