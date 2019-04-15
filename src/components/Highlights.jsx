import React from "react";
import Post from "./Post";

function Highlights(){
  return (
    <div>
      <h2>HIGHLIGHTS JSX: You could put a spread of highlighted images or posts below.</h2>
      <Post
        title="Post Title Example"
        author="Post Author"
        details="Post Details"/>
    </div>
  );
}

export default Highlights;
